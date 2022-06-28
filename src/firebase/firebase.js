/* eslint-disable no-unused-vars */
import { firebase, initializeApp } from "firebase/app";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyBBY-0Nahwb2gigYTeA2tQWUVrY46PbJUU",
  authDomain: "weather-app-00.firebaseapp.com",
  projectId: "weather-app-00",
  storageBucket: "weather-app-00.appspot.com",
  messagingSenderId: "813166505154",
  appId: "1:813166505154:web:410c879084b7c27f929f5b",
  measurementId: "G-E3V0CK4E5H",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
// const db = getFirestore(app);
export default firebaseApp.firestore();
// firebase.initializeApp(firebaseConfig);
