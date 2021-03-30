import * as firebase from "firebase/app";
import "firebase/storage";
import "firebase/firestore";
// Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  var firebaseConfig = {
    apiKey: "AIzaSyDbuFwQl1Ly5jQkT5YjoBkzde5Ix1BnUSw",
    authDomain: "portfolio-march.firebaseapp.com",
    projectId: "portfolio-march",
    storageBucket: "portfolio-march.appspot.com",
    messagingSenderId: "642103625342",
    appId: "1:642103625342:web:3d96eac5ebb8bc0f157a2f",
    measurementId: "G-KKWB7JXHXH"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  const projectStorage=firebase.storage();
  const projectFirestore=firebase.firestore();

  export{projectStorage,projectFirestore};