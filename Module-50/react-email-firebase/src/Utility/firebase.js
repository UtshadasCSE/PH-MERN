// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDUike7fRimpi8LjARXRmn-PT9O0e0j7HE",
  authDomain: "simple-email-firebase.firebaseapp.com",
  projectId: "simple-email-firebase",
  storageBucket: "simple-email-firebase.appspot.com",
  messagingSenderId: "27000607472",
  appId: "1:27000607472:web:794b2b980235052c816835",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
