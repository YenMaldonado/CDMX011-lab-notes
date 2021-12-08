import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD3cpNmqMRPi0VKfg4cIo7PT9IjYX9Kmio",
    authDomain: "labnotes-af44f.firebaseapp.com",
    projectId: "labnotes-af44f",
    storageBucket: "labnotes-af44f.appspot.com",
    messagingSenderId: "230159624162",
    appId: "1:230159624162:web:e60eabb5162253641afbbb"
  };

const fb = firebase.initializeApp(firebaseConfig);
const db = fb.firestore();