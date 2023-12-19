// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyA9OuBcljPDp1XdRnHXbaDbPIUe37RpS7M",
  authDomain: "flicket-224a4.firebaseapp.com",
  projectId: "flicket-224a4",
  storageBucket: "flicket-224a4.appspot.com",
  messagingSenderId: "971141264282",
  appId: "1:971141264282:web:53b4cd8c802fdea7f4c023",
  measurementId: "G-FJVDK3XRDK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

export {auth, provider};