const firebase = require("firebase");

//import { initializeApp } from "firebase/app";
import { initializeApp } from "firebase-admin/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDKSIQqLbadqt2C002Qvw-Lse5__ntSef4",
  authDomain: "samaibackend.firebaseapp.com",
  projectId: "samaibackend",
  storageBucket: "samaibackend.appspot.com",
  messagingSenderId: "576432739407",
  appId: "1:576432739407:web:e2e44626c84effc2a1863a",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = app.firestore();
const Requests = db.collections("requestsToEssay");

module.exports = Requests;
