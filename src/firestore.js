// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJZn1tVPGpWzETQTc96udITB1yYvnfhW4",
    authDomain: "enfermeriametodologia-3ae2e.firebaseapp.com",
    projectId: "enfermeriametodologia-3ae2e",
    storageBucket: "enfermeriametodologia-3ae2e.appspot.com",
    messagingSenderId: "29425024751",
    appId: "1:29425024751:web:8d4811d5c40cd07185e51a",
    measurementId: "G-5GW5DCRWWB"
};

// Initialize Firebase
//const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

const firebaseApp = firebase.initializeApp(firebaseConfig); 
const db = firebaseApp.firestore();

export default db;