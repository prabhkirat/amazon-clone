import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCNBp6BMRQdQwFLssvZ4rc5YX0lcQeoUcM",
  authDomain: "challenge-b5526.firebaseapp.com",
  projectId: "challenge-b5526",
  storageBucket: "challenge-b5526.appspot.com",
  messagingSenderId: "189636463749",
  appId: "1:189636463749:web:21f277070b5f355fa1adec",
  measurementId: "G-KPPDZCV3ZJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
