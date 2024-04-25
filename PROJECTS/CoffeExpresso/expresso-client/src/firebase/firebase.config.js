import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDM5SseOypW0tGN9q4wPjN3xRjiDMwiXGo",
  authDomain: "coffee-expresso-4b5f0.firebaseapp.com",
  projectId: "coffee-expresso-4b5f0",
  storageBucket: "coffee-expresso-4b5f0.appspot.com",
  messagingSenderId: "516461565822",
  appId: "1:516461565822:web:2b4b5186152d8d1777052f",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
