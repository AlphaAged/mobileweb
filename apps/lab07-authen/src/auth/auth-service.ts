import { getAuth } from "firebase/auth";
import {
  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
  RecaptchaVerifier,
  signInWithPhoneNumber
} from "firebase/auth";

import { app } from "./firebase";

const auth = getAuth(app);

let confirmationResult: any;

const loginEmail = async (email: string, password: string) => {
  return await signInWithEmailAndPassword(auth, email, password);
};

const loginGoogle = async () => {
  const provider = new GoogleAuthProvider();
  return await signInWithPopup(auth, provider);
};

const loginPhone = async (phone: string) => {
  const recaptcha = new RecaptchaVerifier(auth, "recaptcha-container", {
    size: "invisible"
  });

  confirmationResult = await signInWithPhoneNumber(auth, phone, recaptcha);
};

const verifyOTP = async (otp: string) => {
  return await confirmationResult.confirm(otp);
};

const getCurrentUser = async () => {
  return auth.currentUser;
};

export const authService = {
  loginEmail,
  loginGoogle,
  loginPhone,
  verifyOTP,
  getCurrentUser
};
