import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyAMj1s9HZx07-rCm-_sXpJDgK4U61_6ZL8",
  authDomain: "chat-41a03.firebaseapp.com",
  projectId: "chat-41a03",
  storageBucket: "chat-41a03.appspot.com",
  messagingSenderId: "652137258495",
  appId: "1:652137258495:web:5afe7cd897b11934281bca",
  measurementId: "G-MX3FR3D7XC"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()