// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDylFuHtNVGa3bs_MlHK83NN2-Ffjtbt00",
  authDomain: "auth-firebase-815af.firebaseapp.com",
  projectId: "auth-firebase-815af",
  storageBucket: "auth-firebase-815af.appspot.com",
  messagingSenderId: "569040996769",
  appId: "1:569040996769:web:ecade3fb0d45761269e3e0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
