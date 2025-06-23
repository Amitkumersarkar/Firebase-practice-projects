// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA1E5nb5eQA8zqyKNMVsxUnMxo80yDmSw4",
    authDomain: "practice-projects-3525d.firebaseapp.com",
    projectId: "practice-projects-3525d",
    storageBucket: "practice-projects-3525d.firebasestorage.app",
    messagingSenderId: "1069338457356",
    appId: "1:1069338457356:web:c9fcd594f623aefddb0529"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
