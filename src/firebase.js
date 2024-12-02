// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import {initializeApp} from "firebase/app"
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
const firebaseConfig = {
    apiKey: process.env.React_APP_FIREBASE_APi_KEY,
  authDomain: process.env.React_APP_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.React_APP_FIREBASE_PROJECT_ID,
  storageBucket: process.env.React_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.React_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.React_APP_FIREBASE_APP_ID,
  measurementId: process.env.React_APP_FIREBASE_MEASUREMENT_ID,
  };


  const app = initializeApp(firebaseConfig)
  const auth = getAuth(app)
  const db = getFirestore(app)
  export {auth , db};