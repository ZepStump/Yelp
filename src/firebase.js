// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyC3KZ-nVPW1urMLCPV_Vf6lAifmgu08Tq8",
  authDomain: "yelp-cc7d0.firebaseapp.com",
  projectId: "yelp-cc7d0",
  storageBucket: "yelp-cc7d0.appspot.com",
  messagingSenderId: "359060792472",
  appId: "1:359060792472:web:dac6da61ee4493fb8a9ced",
  measurementId: "G-BF7WBNNCGE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);