// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBs3fP7eHK5gUg4nQV-Tr36HDQxP3Syh-c",
  authDomain: "banking-system-b6a78.firebaseapp.com",
  databaseURL: "https://banking-system-b6a78-default-rtdb.firebaseio.com",
  projectId: "banking-system-b6a78",
  storageBucket: "banking-system-b6a78.appspot.com",
  messagingSenderId: "261459808437",
  appId: "1:261459808437:web:34069b9ef30bb0847f2efc",
  measurementId: "G-9542V3KK28",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
