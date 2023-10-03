// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4Af3KlwtUw0T7zAwwfbiECzqV8TNHI5g",
  authDomain: "auth-moha-milon-3be32.firebaseapp.com",
  projectId: "auth-moha-milon-3be32",
  storageBucket: "auth-moha-milon-3be32.appspot.com",
  messagingSenderId: "798556797711",
  appId: "1:798556797711:web:f7e40b9f9971159f4cdc7a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;