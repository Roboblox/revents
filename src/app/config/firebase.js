import firebase from "firebase";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB78IxSR1uc3DI4I5KE-FUAZdM-wNK32IU",
  authDomain: "consummate-mark-208619.firebaseapp.com",
  databaseURL: "https://consummate-mark-208619.firebaseio.com",
  projectId: "consummate-mark-208619",
  storageBucket: "consummate-mark-208619.appspot.com",
  messagingSenderId: "149874100909"
};

firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export default firebase;
