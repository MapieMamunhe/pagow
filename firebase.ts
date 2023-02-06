// Import the functions you need from the SDKs you need
import * as firebase from "firebase/app";
import * as firebaseAuth from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKIt2mN_Chcm6jtxvfSX-RiG7m3D7LR9s",
  authDomain: "pagow-tcc.firebaseapp.com",
  projectId: "pagow-tcc",
  storageBucket: "pagow-tcc.appspot.com",
  messagingSenderId: "532324761696",
  appId: "1:532324761696:web:67e665fb501a1424e5c305",
  measurementId: "G-CHZM7R5FER",
};

// Initialize Firebase
let app;
//const app = initializeApp(firebaseConfig);
if (firebase.getApps().length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.getApp();
}
const auth = firebaseAuth;
// const analytics = getAnalytics(app);

export { auth };
