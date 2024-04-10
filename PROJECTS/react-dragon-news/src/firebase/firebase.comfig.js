// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: "the-dragon-news-26882.firebaseapp.com",
  projectId: "the-dragon-news-26882",
  storageBucket: "the-dragon-news-26882.appspot.com",
  messagingSenderId: "612612308254",
  appId: "1:612612308254:web:68584a9463659630979d0f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
