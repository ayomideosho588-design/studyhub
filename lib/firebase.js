import { initializeApp, getApps } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC7aLkJyUxf0S5xpWLE74PWG0yP5UkUGXI",
  authDomain: "studyhub-f2651.firebaseapp.com",
  projectId: "studyhub-f2651",
  storageBucket: "studyhub-f2651.firebasestorage.app",
  messagingSenderId: "163860702898",
  appId: "1:163860702898:web:3b24f4b768c6ed40cacbab",
};

const app = getApps().length ? getApps()[0] : initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
export const googleProvider = new GoogleAuthProvider();
