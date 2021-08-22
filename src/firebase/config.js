/* eslint-disable prettier/prettier */
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
    apiKey: 'AIzaSyDLxkql4kli70pEU_XbE9Lm0wCKjX5ASb8',
    authDomain: 'gemfinder-129df.firebaseapp.com',
    databaseURL: 'https://gemfinder-129df-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'gemfinder-129df',
    storageBucket: 'gemfinder-129df.appspot.com',
    messagingSenderId: '570495414084',
    appId: '1:570495414084:ios:aded4a4727fc1b1facb111',
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

export { firebase };