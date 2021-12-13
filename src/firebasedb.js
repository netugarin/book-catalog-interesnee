import { initializeApp } from "firebase/app";
import { getFirestore } from  "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA9kjFX7ZtPZ1_VHjfQFOdheeJb984z1GI",
    authDomain: "book-catalog-interesnee-da9f6.firebaseapp.com",
    databaseURL: "https://book-catalog-interesnee-da9f6-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "book-catalog-interesnee-da9f6",
    storageBucket: "book-catalog-interesnee-da9f6.appspot.com",
    messagingSenderId: "673670118056",
    appId: "1:673670118056:web:0fad4aba47542a3d37209d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default getFirestore()