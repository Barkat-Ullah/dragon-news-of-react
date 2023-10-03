// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqzLAptcqroGB0wO-gI2BVl-htiMJjPCI",
  authDomain: "dragon-news-auth-ff3f8.firebaseapp.com",
  projectId: "dragon-news-auth-ff3f8",
  storageBucket: "dragon-news-auth-ff3f8.appspot.com",
  messagingSenderId: "1077993634633",
  appId: "1:1077993634633:web:01c9952f4dc7dc50d7f898"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;