import firebase from "firebase/app"
import "firebase/auth";
import "firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDqoYj2hULUYuHOIJvvsieZQ0f4iyrhFqA",
    authDomain: "nwitter-d64a1.firebaseapp.com",
    projectId: "nwitter-d64a1",
    storageBucket: "nwitter-d64a1.appspot.com",
    messagingSenderId: "567998095796",
    appId: "1:567998095796:web:356273bd759859651452e1"
  };

firebase.initializeApp(firebaseConfig);

export const firebaseInstance = firebase;

export const authService = firebase.auth();
export const dbService = firebase.firestore();