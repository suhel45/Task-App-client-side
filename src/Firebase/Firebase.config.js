// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCYpOdQD_c7NRMZ47wyf5qQz04HzI2MwYo",
  authDomain: "auth-router-context-api-fb57e.firebaseapp.com",
  projectId: "auth-router-context-api-fb57e",
  storageBucket: "auth-router-context-api-fb57e.appspot.com",
  messagingSenderId: "663076631571",
  appId: "1:663076631571:web:0fdd875120b73cc941fbe6"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;