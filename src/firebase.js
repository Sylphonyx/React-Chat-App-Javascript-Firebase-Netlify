import firebase from "firebase/app";
import "firebase/auth" 

export const auth = firebase.initializeApp ({
    apiKey: "AIzaSyDAmnmkcT4t3O8KbS07Ug45qRkOaM3TSQ4",
    authDomain: "gosha-chat.firebaseapp.com",
    projectId: "gosha-chat",
    storageBucket: "gosha-chat.appspot.com",
    messagingSenderId: "332925017843",
    appId: "1:332925017843:web:38bcb2047c0236ecd8a186"
  }).auth();

