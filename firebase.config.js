// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCUfMz4HQm1ntpyYpwC6D9tIrHhXfGlIwQ",
  authDomain: "game-9ca43.firebaseapp.com",
  projectId: "game-9ca43",
  storageBucket: "game-9ca43.firebasestorage.app",
  messagingSenderId: "732102306985",
  appId: "1:732102306985:web:ff0a10fa5d82643659cdb8",
  measurementId: "G-V85H0B5MS4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);