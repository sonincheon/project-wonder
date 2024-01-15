import firebase from "firebase/compat/app";
import "firebase/compat/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD2GL5S2qvY9Tbwlc04sw67zvqw70f8nWM",
  authDomain: "wonderwalker-260db.firebaseapp.com",
  projectId: "wonderwalker-260db",
  storageBucket: "wonderwalker-260db.appspot.com",
  messagingSenderId: "331447999362",
  appId: "1:331447999362:web:b6d8616f491db7ae7d0d9b",
  measurementId: "G-VDK1QWG1FG"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();