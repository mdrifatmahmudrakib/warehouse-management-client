// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDFhGve8JivmgwK23NVnely67WmfWGFwqw",
    authDomain: "laptop-warehouse-69a42.firebaseapp.com",
    projectId: "laptop-warehouse-69a42",
    storageBucket: "laptop-warehouse-69a42.appspot.com",
    messagingSenderId: "668851429707",
    appId: "1:668851429707:web:f2912e505e9a6a35a908ce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default auth;
