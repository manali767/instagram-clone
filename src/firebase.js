// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";

const  firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyADMdVvR1H_tSomCoEhj3lmEb2pdjZorDU",
    authDomain: "instagram-dd175.firebaseapp.com",
    projectId: "instagram-dd175",
    storageBucket: "instagram-dd175.appspot.com",
    messagingSenderId: "171834873062",
    appId: "1:171834873062:web:675d9a1c3d5386e0279727",
    measurementId: "G-MKQGZ3ESFE"
  });

  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const storage = firebase.storage();

  export {db , auth, storage};