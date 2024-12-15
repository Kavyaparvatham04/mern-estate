// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-6d08f.firebaseapp.com",
  projectId: "mern-estate-6d08f",
  storageBucket: "mern-estate-6d08f.firebasestorage.app",
  messagingSenderId: "188989889833",
  appId: "1:188989889833:web:c45bad78b6e7e0d1606b38"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);