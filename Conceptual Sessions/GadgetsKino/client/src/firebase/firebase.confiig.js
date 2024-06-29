// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD8VLTymQUWW8_kAidMopA7Y9PFggTljeM",
  authDomain: "gadgetskinooo.firebaseapp.com",
  projectId: "gadgetskinooo",
  storageBucket: "gadgetskinooo.appspot.com",
  messagingSenderId: "369304880497",
  appId: "1:369304880497:web:afbeb06014b4abe34662d0",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
