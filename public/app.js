var mainApp = {};
(function(){
    var mainContainer = document.getElementById("main_container");

    var logtout =  function(){
        firebase.auth().signOut().then(function(){
            console.log('success');
            window.location.replace("login.html");
        },function(){})
    }

    var init = function(){
        firebase.auth().onAuthStateChanged(function(user) {
            if (user) {
                // User is signed in.
                console.log("stay");
                mainContainer.style.display = "";
            } else {
                // No user is signed in.
                mainContainer.style.display = "none";
                console.log("redirect");
                window.location.replace("login.html");
            }
        });

       var initApp = function() {
            firebase.auth().onAuthStateChanged(function(user) {
                if (user) {
                    // User is signed in.
                    var displayName = user.displayName;
                    var email = user.email;
                    var emailVerified = user.emailVerified;
                    var photoURL = user.photoURL;
                    var uid = user.uid;
                    var phoneNumber = user.phoneNumber;
                    var providerData = user.providerData;
                    user.getIdToken().then(function(accessToken) {
                        document.getElementById('sign-in-status').textContent = 'Signed in';
                        document.getElementById('sign-in').textContent = 'Sign out';
                        document.getElementById('account-details').textContent = JSON.stringify({
                            displayName: displayName,
                            email: email,
                            emailVerified: emailVerified,
                            phoneNumber: phoneNumber,
                            photoURL: photoURL,
                            uid: uid,
                            accessToken: accessToken,
                            providerData: providerData
                        }, null, '  ');
                    });
                } else {
                    // User is signed out.
                    document.getElementById('sign-in-status').textContent = 'Signed out';
                    document.getElementById('sign-in').textContent = 'Sign in';
                    document.getElementById('account-details').textContent = 'null';
                }
            }, function(error) {
                console.log(error);
            });
        };

        window.addEventListener('load', function() {
            initApp();
        });
    }

    init();

    mainApp.logout = logtout;
})();


