// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCUo6ldxd8nC65lN1N_Mp_cCkn9uw6Kv5E",
  authDomain: "shukshukta-cd931.firebaseapp.com",
  projectId: "shukshukta-cd931",
  storageBucket: "shukshukta-cd931.appspot.com",
  messagingSenderId: "839200865018",
  appId: "1:839200865018:web:a4b4c2fc845c62807ae743",
  measurementId: "G-WE4K4S912R"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);
