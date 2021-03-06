
$('.message a').click(function(){
   $('form').animate({height: "toggle", opacity: "toggle"}, "slow");
});

firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   // ...
});

firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
   // Handle Errors here.
   var errorCode = error.code;
   var errorMessage = error.message;
   // ...
});


firebase.auth().onAuthStateChanged(function(user) {
   if (user) {
      // User is signed in.
      var displayName = user.displayName;
      var email = user.email;
      var emailVerified = user.emailVerified;
      var photoURL = user.photoURL;
      var isAnonymous = user.isAnonymous;
      var uid = user.uid;
      var providerData = user.providerData;
      // ...
   } else {
      // User is signed out.
      // ...
   }
});
