
  import { initializeApp } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-app.js";
 
  import { 
    getFirestore,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    setDoc,
    getDoc,
 } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-firestore.js";
 
 import{
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-auth.js";
 
  import {
    getStorage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  } from "https://www.gstatic.com/firebasejs/10.13.0/firebase-storage.js";

  const firebaseConfig = {
    apiKey: "AIzaSyCflBzQqFZQDto0QwVp4taZFfqgjEOlJmY",
    authDomain: "hackathon-project-b3405.firebaseapp.com",
    projectId: "hackathon-project-b3405",
    storageBucket: "hackathon-project-b3405.appspot.com",
    messagingSenderId: "451321729290",
    appId: "1:451321729290:web:c6ae7257fd694f085faaf3",
  };

  const app = initializeApp(firebaseConfig);

  // Initialization of FireStore
  const db = getFirestore(app);

  // Initialization of auth
  const auth = getAuth(app);
  
  // Initialization of storage
  const storage = getStorage(app);

  export {
    app,
    db,
    collection,
    addDoc,
    getDocs,
    doc,
    updateDoc,
    deleteDoc,
    auth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    setDoc,
    getDoc,
    storage,
    ref,
    uploadBytesResumable,
    getDownloadURL,
  };