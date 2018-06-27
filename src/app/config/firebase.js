import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD4KCbal_X6C_suWQXBZt4tu8nDpx2n0Uw",
  authDomain: "revents-444.firebaseapp.com",
  databaseURL: "https://revents-444.firebaseio.com",
  projectId: "revents-444",
  storageBucket: "",
  messagingSenderId: "1006685690316"
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
