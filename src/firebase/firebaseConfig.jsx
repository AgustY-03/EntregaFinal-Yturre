// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDIVjpCGqpJf93nMKpcHbUk0--jmjuExas",
  authDomain: "fulltech-e09ec.firebaseapp.com",
  projectId: "fulltech-e09ec",
  storageBucket: "fulltech-e09ec.appspot.com",
  messagingSenderId: "344278328548",
  appId: "1:344278328548:web:d39e158537cda241c0b8f1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);