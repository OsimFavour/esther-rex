
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyAGY_jDq85-ABDhSr9dTTWU16H5aiDMkgg",
  authDomain: "estherrex-db.firebaseapp.com",
  projectId: "estherrex-db",
  storageBucket: "estherrex-db.appspot.com",
  messagingSenderId: "709031016852",
  appId: "1:709031016852:web:3b7e1847d4130f1c047781"
};


initializeApp(firebaseConfig);

export const auth = getAuth()

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const authenticateWithGooglePopup = () => signInWithPopup(auth, googleProvider)
