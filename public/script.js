// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/12.2.1/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA9tIsRkn6lxMUL1M4EbWOg8XoSiDFADpo",
  authDomain: "cake-project-c04bc.firebaseapp.com",
  projectId: "cake-project-c04bc",
  storageBucket: "cake-project-c04bc.firebasestorage.app",
  messagingSenderId: "754293580579",
  appId: "1:754293580579:web:2003d3ad6414c724766296",
  measurementId: "G-NDR7XY09SH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);