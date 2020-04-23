import firebase from "firebase/app";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyCQQX4tqlJpnZoPrIN6u2IL2fC5Ntf8IJY",
    authDomain: "shop-268c0.firebaseapp.com",
    databaseURL: "https://shop-268c0.firebaseio.com",
    projectId: "shop-268c0",
    storageBucket: "shop-268c0.appspot.com",
    messagingSenderId: "1074796867469",
    appId: "1:1074796867469:web:c5f1fcc5256f75b03cd7c4",
    measurementId: "G-P13RFNEG4H"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();

  export default firebase;