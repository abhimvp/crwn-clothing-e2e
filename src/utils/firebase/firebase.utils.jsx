// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app"; // creates an app instance for us based on some type of config.
// This config is an object that allows us to attach this firebase app instance to that instance we have online.
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";
// doc method - retrive documents inside of our fireStore DB ( getting the document instance) & use getDOc & setDoc to read/get and set the data on these documents
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

// Your web app's Firebase configuration
// we got this from firbase console - code for webApp
const firebaseConfig = {
  apiKey: "AIzaSyAagZeA9RJruHTfo1LxHCJW5bogRboQ8C4",
  authDomain: "crwn-clothing-e2e-db.firebaseapp.com",
  projectId: "crwn-clothing-e2e-db",
  storageBucket: "crwn-clothing-e2e-db.appspot.com",
  messagingSenderId: "1016072531889",
  appId: "1:1016072531889:web:2e951fce01d649b0f39790",
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();
googleProvider.setCustomParameters({
  prompt: "select_account", // what this says is whenever someone interacts with our provider , we want to always force them to select an account.
});

export const auth = getAuth(); // export our Authentication to create our instance.
// go to firebase console > Authentication > Sign-In Method > Select Google > Enable toggle > provide support email . Save
// then go to sign-in component and import signInwithgooglePopup
// also export the signInwith Google pop ip
console.log(auth);
export const signInWithGooglePopUp = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore(); // directly point to the db inside of our console.

export const createUserDocumentFromAuth = async (
  userAuth,
  additionalInformation
) => {
  if (!userAuth) return;
  // here we will be passing the user_access_token_response_object from which we gather uid
  const userDocRef = doc(db, "users", userAuth.uid);

  //   console.log(userDocRef);

  const userSnapShot = await getDoc(userDocRef);
  //   console.log(userSnapShot);
  //   console.log(userSnapShot.exists()); // gives false as there's no db created / collection

  // if the user data doesnotexist
  // create / set the document with the data from userAuth in my collection
  if (!userSnapShot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log("error creating the userr ", error.message);
    }
  }

  // if user data exists

  return userDocRef;

  // return back userDocRef
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;
  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => {
  console.log("Inside onAuthStateChangedListener", auth);
  onAuthStateChanged(auth, callback); // whenever u instantiate function you have to give me back callback , which will be given to onAuthStateChanged/
};
