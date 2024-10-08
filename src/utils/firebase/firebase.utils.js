
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth"
import { doc, setDoc, getDoc, getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAGY_jDq85-ABDhSr9dTTWU16H5aiDMkgg",
  authDomain: "estherrex-db.firebaseapp.com",
  projectId: "estherrex-db",
  storageBucket: "estherrex-db.appspot.com",
  messagingSenderId: "709031016852",
  appId: "1:709031016852:web:3b7e1847d4130f1c047781"
};


initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider()

googleProvider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const authenticateWithGooglePopup = () => signInWithPopup(auth, googleProvider)


export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth) => {
  console.log('userAuth', userAuth)
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid)
  console.log('userAuth uid', userAuth.uid)
  console.log('userDocRef', userDocRef)

  const userSnapshot = await getDoc(userDocRef)
  console.log(userSnapshot);
  console.log(userSnapshot.exists());

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth
    const createdAt = new Date()

    try {
      await setDoc (userDocRef, {
        displayName,
        email,
        createdAt
      })
    } catch (error) {

      console.log(`Error fetching the user: ${error.message}`); 
    }
  }

  return userDocRef
  
}

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
}