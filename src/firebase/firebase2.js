// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBINIxrJKYMryeNEqE34MqoEQpnZGY5U_k",
  authDomain: "my-react-app-392a2.firebaseapp.com",
  projectId: "my-react-app-392a2",
  storageBucket: "my-react-app-392a2.firebasestorage.app",
  messagingSenderId: "807599911562",
  appId: "1:807599911562:web:ff9287927136c8db423373",
  measurementId: "G-259N22TLW9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);