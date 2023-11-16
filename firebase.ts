// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCWUCbkB-6dTo07dloKP726ch4oIioPnFE",
  authDomain: "my-web-bf96b.firebaseapp.com",
  projectId: "my-web-bf96b",
  storageBucket: "my-web-bf96b.appspot.com",
  messagingSenderId: "706405755340",
  appId: "1:706405755340:web:6c5d730f3bbba404b29569",
  measurementId: "G-7C33TCCTKB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);