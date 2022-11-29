import { initializeApp } from "firebase/app";
import { getFirestore, collection } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB1JzYT6EFuJreTIb930vGqS-02U5Ysfqw",
  authDomain: "web3-donations.firebaseapp.com",
  projectId: "web3-donations",
  storageBucket: "web3-donations.appspot.com",
  messagingSenderId: "277769664007",
  appId: "1:277769664007:web:bb459830dcf8cd12ad1ca2",
};

// init firebase app
initializeApp(firebaseConfig);

// init services
const db = getFirestore();

// collection ref
export const colRef = collection(db, "donors");
