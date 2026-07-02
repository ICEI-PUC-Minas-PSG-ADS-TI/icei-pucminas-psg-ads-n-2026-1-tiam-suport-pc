// import { initializeApp, getApps, getApp } from "firebase/app";
// import { getFirestore } from "firebase/firestore";
// import {
//   initializeAuth,
//   getReactNativePersistence,
//   getAuth,
// } from "firebase/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Platform } from "react-native";

// const firebaseConfig = {
//   apiKey: "AIzaSyC7HnYolXX-_XDG7F7cFXFjYgwqC7_yoP0",
//   authDomain: "fixphones-a733c.firebaseapp.com",
//   projectId: "fixphones-a733c",
//   storageBucket: "fixphones-a733c.firebasestorage.app",
//   messagingSenderId: "862396149492",
//   appId: "1:862396149492:web:b8f46eef43dedc11bdb8a1",
// };

// // Evita inicializar duas vezes durante o Hot Reload
// const app = getApps().length ? getApp() : initializeApp(firebaseConfig);

// let auth;

// if (Platform.OS === "web") {
//   auth = getAuth(app);
// } else {
//   auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(AsyncStorage),
//   });
// }

// const db = getFirestore(app);

// export { app, auth, db };