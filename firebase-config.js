// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwPfcHypFLnv98SlytSlcsBjxdJZ9IBgI",
  authDomain: "camillasbuckles.firebaseapp.com",
  projectId: "camillasbuckles",
  storageBucket: "camillasbuckles.firebasestorage.app",
  messagingSenderId: "660192413064",
  appId: "1:660192413064:web:757779f9d83620084be63d",
  measurementId: "G-126DEFD4TL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);