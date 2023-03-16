// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBi2LxfVKcw0HbzD_YrBHBtex55kxd-aU",
  authDomain: "curso-react-e74f8.firebaseapp.com",
  projectId: "curso-react-e74f8",
  storageBucket: "curso-react-e74f8.appspot.com",
  messagingSenderId: "664066837244",
  appId: "1:664066837244:web:9c090a5b252604e6402579"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const database = getFirestore(app);