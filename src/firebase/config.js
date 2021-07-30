import  firebase from 'firebase/app'
import 'firebase/storage'
import 'firebase/firestore'

var firebaseConfig = {
    apiKey: "AIzaSyDZmwi_E1Cj5-XEJ4G2j63ketUn4O_BllQ",
    authDomain: "photo-gallery-157e2.firebaseapp.com",
    projectId: "photo-gallery-157e2",
    storageBucket: "photo-gallery-157e2.appspot.com",
    messagingSenderId: "978287291165",
    appId: "1:978287291165:web:c6a07e636e92e5af878ff4",
    measurementId: "G-JRPQRQQ5S0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();
  const db = firebase.firestore();
  const timestamp = firebase.firestore.FieldValue.serverTimestamp;
  
  export { storage , db , timestamp }