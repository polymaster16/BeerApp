// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBPSnY0rvl3kC2Bi36ieZ7N3QcwqDVUsNc",
  authDomain: "votx-system.firebaseapp.com",
  projectId: "votx-system",
  storageBucket: "votx-system.appspot.com",
  messagingSenderId: "28695770465",
  appId: "1:28695770465:web:f899ebac82782367a6c120",
  measurementId: "G-CR54XTBRE9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);


export {db};