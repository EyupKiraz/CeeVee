import firebase from 'firebase'
import "firebase/firestore"

firebase.initializeApp({
    apiKey: "AIzaSyDoT3u0yvsP8otS_vBNxsjdQ8Fs7v2XlIM",
    authDomain: "eyup-kiraz-portfolio-f9862.firebaseapp.com",
    databaseURL: "https://eyup-kiraz-portfolio-f9862.firebaseio.com",
    projectId: "eyup-kiraz-portfolio-f9862",
    storageBucket: "eyup-kiraz-portfolio-f9862.appspot.com",
    messagingSenderId: "548247623",
    appId: "1:548247623:web:07741869f26fce854cb962",
    measurementId: "G-9T22QLNKV5"
});


var db = firebase.firestore();

export const getData = (submissionID) => {
    return db.collection('jotform').doc(submissionID).get();
}