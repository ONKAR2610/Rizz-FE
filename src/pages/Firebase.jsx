// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB5_IF4mMwPMP1fyVBIhaAjyVQqCWwkroc",
  authDomain: "authentication-a67fa.firebaseapp.com",
  projectId: "authentication-a67fa",
  storageBucket: "authentication-a67fa.firebasestorage.app",
  messagingSenderId: "952920207893",
  appId: "1:952920207893:web:024831f36463fc794f141c",
  measurementId: "G-TB6HDDRS3M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export default app;