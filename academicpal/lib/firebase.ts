// lib/firebase.ts
import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";



const firebaseConfig = {
  apiKey: "AIzaSyDSa6WbMn7bSjw_ddH_CfN0hi3wQJxXpoI",
  authDomain: "ecommerce77-f06f0.firebaseapp.com",
  databaseURL: "https://ecommerce77-f06f0-default-rtdb.firebaseio.com",
  projectId: "ecommerce77-f06f0",
  storageBucket: "ecommerce77-f06f0.firebasestorage.app",
  messagingSenderId: "235844479074",
  appId: "1:235844479074:web:76844a186c2967a3b6893b",
};


const app = initializeApp(firebaseConfig);


const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();
export const provider = new GoogleAuthProvider();


const db = getFirestore(app);




export {
  auth,
  db,
  googleProvider,
  githubProvider,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
};
