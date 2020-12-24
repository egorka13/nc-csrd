import firebase from "firebase/app";
import "firebase/auth"
import store from "../../store"

const firebaseConfig = {
    apiKey: "AIzaSyAmQWUlaXrqQWOwy2Q0_qRtWFJQhlCGOg0",
    authDomain: "nc-csrd.firebaseapp.com",
    databaseURL: "https://nc-csrd.firebaseio.com",
    projectId: "nc-csrd",
    storageBucket: "nc-csrd.appspot.com",
    messagingSenderId: "891812689175",
    appId: "1:891812689175:web:f648d5b86f372137db7352"
};

firebase.initializeApp(firebaseConfig);

export const Firebase = firebase;

export const signIn = function(email, password){
    firebase.auth()
        .signInWithEmailAndPassword(email, password)
        .then(function(userCredential) {
            console.log(userCredential.user.getIdToken())
            userCredential.user.getIdToken().then(function(token) {
                localStorage.setItem('idToken', token);
                window.history.back();
            });
        })
}


