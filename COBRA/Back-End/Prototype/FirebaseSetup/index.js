import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from 'firebase';
firebase.initializeApp({
  apiKey: "AIzaSyCa0x2jrDpU9LlxVjTCLvdlxB4bpEvkNsw",
     authDomain: "fir-prototype-97c6d.firebaseapp.com",
     databaseURL: "https://fir-prototype-97c6d.firebaseio.com",
     projectId: "fir-prototype-97c6d",
     storageBucket: "fir-prototype-97c6d.appspot.com",
     messagingSenderId: "277491693784",
     appId: "1:277491693784:web:6832534a711c583e473fad",
     measurementId: "G-V3MMJN04VP"
  });

  const FIREBASE = firebase;

export default FIREBASE;
