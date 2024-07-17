// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA6eu-yPCYu_XHPVvQW-MhrWU-aBxoSyI4",
  authDomain: "business-listing-app-9c303.firebaseapp.com",
  projectId: "business-listing-app-9c303",
  storageBucket: "business-listing-app-9c303.appspot.com",
  messagingSenderId: "297935214080",
  appId: "1:297935214080:web:6aae63549a29d457332ae5",
  measurementId: "G-3NB4R112NP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
