import { initializeApp } from "firebase/app";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { getFirestore, onSnapshot, collection } from "firebase/firestore";

const app = initializeApp({
  apiKey: "AIzaSyCwilUMFkUs3q_V34bf8xYzovNRBBopLyM",
  authDomain: "afexo-education.firebaseapp.com",
  projectId: "afexo-education",
  storageBucket: "afexo-education.appspot.com",
  messagingSenderId: "421159112364",
  appId: "1:421159112364:web:ce09258943609d2d151909",
});

const db = getFirestore(app);

const auth = getAuth(app);

export { auth, db, signInWithEmailAndPassword, onSnapshot, collection };

export default app;
