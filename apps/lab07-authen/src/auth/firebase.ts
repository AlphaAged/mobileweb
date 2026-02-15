import { initializeApp, getApps, getApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyD7fuyCuvlEBifp4aH89sr70wZFA-PI6q4",
  authDomain: "mobile-web-d1772.firebaseapp.com",
  projectId: "mobile-web-d1772",
  appId: "1:927589812130:web:1c9ba25d20ef6fcdf094fb"
};

export const app =
  getApps().length === 0
    ? initializeApp(firebaseConfig)
    : getApp();
