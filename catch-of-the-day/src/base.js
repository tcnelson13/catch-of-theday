import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAutvXYEFbERmfRO9PddiHJKmHgYrG4eYM",
    authDomain: "catch-of-the-day-tnelson.firebaseapp.com",
    databaseURL: "https://catch-of-the-day-tnelson.firebaseio.com",
    // projectId: "catch-of-the-day-tnelson",
    // storageBucket: "catch-of-the-day-tnelson.appspot.com",
    // messagingSenderId: "678221809646",
    // appId: "1:678221809646:web:a87472003acefb676ef0ff"
})

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export {firebaseApp}

// this is a default export
export default base;