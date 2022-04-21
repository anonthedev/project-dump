// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc  } from 'firebase/firestore'
import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcJAUXvSInDYJCaLHRb5w7nK1-c_qSCiU",
  authDomain: "project-dump-748b5.firebaseapp.com",
  projectId: "project-dump-748b5",
  storageBucket: "project-dump-748b5.appspot.com",
  messagingSenderId: "1079602180793",
  appId: "1:1079602180793:web:1c6d3b4eda5da499aea168"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore()
const auth =  getAuth();
const provider = new GoogleAuthProvider();

// const storage =  storage();

export { auth, provider, signInWithPopup, GoogleAuthProvider, doc, getDoc, getDocs, collection };

export default db