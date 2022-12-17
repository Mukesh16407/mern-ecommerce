
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyDkz5ZmywDc8S4qYBbyEnjX8qPfFg6iQrY",
  authDomain: "mern-ecommerce-84687.firebaseapp.com",
  projectId: "mern-ecommerce-84687",
  storageBucket: "mern-ecommerce-84687.appspot.com",
  messagingSenderId: "327659398047",
  appId: "1:327659398047:web:4a1fb186fcae304e1c53aa",
  measurementId: "G-03TBN4F8F1"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);