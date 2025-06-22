// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBmlMXYNigk7fTr2LvrBpmdUevxBlbl3aI",
    authDomain: "simple-firebase2-630c3.firebaseapp.com",
    projectId: "simple-firebase2-630c3",
    storageBucket: "simple-firebase2-630c3.firebasestorage.app",
    messagingSenderId: "857270278438",
    appId: "1:857270278438:web:0e21883a3994081f4a89e7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app;
const auth = getAuth(app);
export default auth;