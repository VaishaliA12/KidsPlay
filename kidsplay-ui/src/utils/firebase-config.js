// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyDFvRYQir5QlPtvksGOnR7nBSOuJHWuPu0",
  authDomain: "kidsplay-51aa7.firebaseapp.com",
  projectId: "kidsplay-51aa7",
  storageBucket: "kidsplay-51aa7.appspot.com",
  messagingSenderId: "713637625467",
  appId: "1:713637625467:web:10b22b919538b877036cde",
  measurementId: "G-NC8CYFPKH5"
};
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
