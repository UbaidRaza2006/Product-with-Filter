// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcOmmiLWyWFRiBwN2LJJbFJXygy0RTdG8",
  authDomain: "react-practice-e708f.firebaseapp.com",
  projectId: "react-practice-e708f",
  storageBucket: "react-practice-e708f.appspot.com",
  messagingSenderId: "985685659834",
  appId: "1:985685659834:web:efcc63e8f2245c33def283",
  measurementId: "G-GQN4B93QTP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

export{app,analytics,db}