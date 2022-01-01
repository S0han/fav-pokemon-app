import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

const config = {
    apiKey: "AIzaSyAmgdg6zmcokcsDtDInx6dfsm8JOZB48uY",
    authDomain: "fav-pokemon-db.firebaseapp.com",
    projectId: "fav-pokemon-db",
    storageBucket: "fav-pokemon-db.appspot.com",
    messagingSenderId: "450947311326",
    appId: "1:450947311326:web:7fac34eead098fb27d844f",
    measurementId: "G-8S69X925NW"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;