import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBEZ9omR2bktCPSOG428GTCdyWnZXr9jhQ",
    authDomain: "clone-fb450.firebaseapp.com",
    databaseURL: "https://clone-fb450.firebaseio.com",
    projectId: "clone-fb450",
    storageBucket: "clone-fb450.appspot.com",
    messagingSenderId: "574381345897",
    appId: "1:574381345897:web:22baef0390660b6bb666f8",
    measurementId: "G-6H89416SYV"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth} ;