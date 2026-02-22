import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD7fuyCuvlEBifp4aH89sr70wZFA-PI6q4",
  authDomain: "mobile-web-d1772.firebaseapp.com",
  projectId: "mobile-web-d1772",
  storageBucket: "mobile-web-d1772.firebasestorage.app",
  messagingSenderId: "927589812130",
  appId: "1:927589812130:web:1c9ba25d20ef6fcdf094fb",
  measurementId: "G-SERFKF4YMF"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);