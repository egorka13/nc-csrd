import firebase from "firebase/app";

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


