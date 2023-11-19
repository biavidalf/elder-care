import { initializeApp } from "firebase/app";
import { initializeAuth,  } from "@react-native-firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBXcCHgWOZU-7icDn1S48-7LDGrJ_r6ohg",
  authDomain: "unifor-elder-care.firebaseapp.com",
  projectId: "unifor-elder-care",
  storageBucket: "unifor-elder-care.appspot.com",
  messagingSenderId: "873103329804",
  appId: "1:873103329804:web:879ad9061776174160bc29",
  measurementId: "G-3HGY8K6C5D",
};

const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app)
export const db = getFirestore(app);
