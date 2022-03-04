import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyCG7jGN_ABAASYm8LSf2L0BMhpa6Ltczrc",
  authDomain: "dial-a-delivery-ef487.firebaseapp.com",
  projectId: "dial-a-delivery-ef487",
  storageBucket: "dial-a-delivery-ef487.appspot.com",
  messagingSenderId: "244317751658",
  appId: "1:244317751658:web:8e522fd7d2467f96a37d13",
  measurementId: "G-09V13QTZV6"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

const auth = app.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
