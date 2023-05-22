// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDmacaUYQnvfmRCj9oiI9ix8S4BrkI3Imc",
  authDomain: "toolify-180e9.firebaseapp.com",
  projectId: "toolify-180e9",
  storageBucket: "toolify-180e9.appspot.com",
  messagingSenderId: "232042587627",
  appId: "1:232042587627:web:78d7c552bf85c86f9be5ae",
  measurementId: "G-1CPWWYSPYL",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const analytics = getAnalytics(app);
