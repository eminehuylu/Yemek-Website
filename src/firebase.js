import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyC_bh-yK6NC3NMiOoxxzvB4E7h3vaQAOOk",
    authDomain: "yemek-website.firebaseapp.com",
    projectId: "yemek-website",
    storageBucket: "yemek-website.appspot.com",
    messagingSenderId: "942900676294",
    appId: "1:942900676294:web:50972bb61448ed84bab9c7",
    measurementId: "G-3X5CZ86D5C"
  };

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);

export default app;
