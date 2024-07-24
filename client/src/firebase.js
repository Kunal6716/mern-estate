// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-21226.firebaseapp.com",
  projectId: "mern-estate-21226",
  storageBucket: "mern-estate-21226.appspot.com",
  messagingSenderId: "687055807822",
  appId: "1:687055807822:web:40db91630392068f5faa1f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);