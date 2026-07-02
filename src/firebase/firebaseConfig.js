import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7HnYolXX-_XDG7F7cFXFjYgwqC7_yoP0",
  authDomain: "fixphones-a733c.firebaseapp.com",
  projectId: "fixphones-a733c",
  storageBucket: "fixphones-a733c.firebasestorage.app",
  messagingSenderId: "862396149492",
  appId: "1:862396149492:web:b8f46eef43dedc11bdb8a1",
};

const app =
  getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApp();

const auth = getAuth(app);

const db = getFirestore(app);

export { auth, db };