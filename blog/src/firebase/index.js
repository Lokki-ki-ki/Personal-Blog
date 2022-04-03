// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ2lLTt5egOyoUOv26fEl1w3BQ2poJEvg",
  authDomain: "my-blog-23e95.firebaseapp.com",
  projectId: "my-blog-23e95",
  storageBucket: "my-blog-23e95.appspot.com",
  messagingSenderId: "512929471641",
  appId: "1:512929471641:web:4040a308a36f9d39b5ac08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth()
const projfirestore = getFirestore(app);
export { app, auth, projfirestore }