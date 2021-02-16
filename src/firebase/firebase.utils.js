import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
  apiKey: 'AIzaSyBFY2G98QI8jsAuua8J3-JIiphl7sVnTkQ',
  authDomain: 'crwn-shop-a70f8.firebaseapp.com',
  databaseURL: 'https://crwn-shop-a70f8-default-rtdb.firebaseio.com',
  projectId: 'crwn-shop-a70f8',
  storageBucket: 'crwn-shop-a70f8.appspot.com',
  messagingSenderId: '631609263434',
  appId: '1:631609263434:web:ba9946233d11717884adb3',
  measurementId: 'G-8NCJTPFKM0',
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
