// Import the functions you need from the SDKs you need
import firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyACOj-RoQW2eNGwOFZRinpfmNMuxsbhnUA",
  authDomain: "clone-c3b5e.firebaseapp.com",
  projectId: "clone-c3b5e",
  storageBucket: "clone-c3b5e.appspot.com",
  messagingSenderId: "307316642013",
  appId: "1:307316642013:web:6303a3f50a3464e8ca8b34",
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
