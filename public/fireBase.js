var fireBase = fireBase || firebase;
var hasInit = false;
var config = {
    apiKey: "AIzaSyARtwjtAPstEmekuEKfA-98pSqM6GFPSwE",
    authDomain: "my-first-project-6cf24.firebaseapp.com/",
    databaseURL: "https://my-first-project-6cf24.firebaseapp.com/",
    projectId: "my-first-project-6cf24",
    storageBucket: "my-first-project-6cf24.appspot.com",
    messagingSenderId: "800484023387",
};

if(!hasInit){
    firebase.initializeApp(config);
    hasInit = true;
}
