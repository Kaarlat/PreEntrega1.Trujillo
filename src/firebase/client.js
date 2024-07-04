import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDNvrG9rfcRnxAlAePGirymbNSqOiRa9Bw",
  authDomain: "ecommerce-kt.firebaseapp.com",
  projectId: "ecommerce-kt",
  storageBucket: "ecommerce-kt.appspot.com",
  messagingSenderId: "757771522813",
  appId: "1:757771522813:web:282975ca850727e5a9a494",
  measurementId: "G-GLVE3D4P5S"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);