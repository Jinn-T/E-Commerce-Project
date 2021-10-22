// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAyZotHs91kvzH_-719jtbnQIz0c4wozdw",
    authDomain: "e-commerce-afa3e.firebaseapp.com",
    projectId: "e-commerce-afa3e",
    storageBucket: "e-commerce-afa3e.appspot.com",
    messagingSenderId: "616113747506",
    appId: "1:616113747506:web:676095723d3534e3f82e2b",
};

firebase.initializeApp(firebaseConfig);

// Initialize Firebase
const firestore = firebase.firestore();

export default firestore;
