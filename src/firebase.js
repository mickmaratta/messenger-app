
import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth"
import { getAnalytics } from "firebase/analytics";
import { getStorage, ref } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyClo9CS1NrGwZLWAmkF-KLU1xxr1YWuUss",
  authDomain: "messenger-d6c8e.firebaseapp.com",
  projectId: "messenger-d6c8e",
  storageBucket: "messenger-d6c8e.appspot.com",
  messagingSenderId: "813692290251",
  appId: "1:813692290251:web:8720a641d2d48d0fe5474e",
  measurementId: "G-KYGRD38Z5B"
};


export const app = initializeApp(firebaseConfig);
export const storage = getStorage();
export const auth = getAuth()
export const db = getFirestore()
const analytics = getAnalytics(app);