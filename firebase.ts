import { initializeApp } from "firebase/app"
import { getAuth } from "firebase/auth"
import { getFirestore } from "firebase/firestore"
import { getAnalytics } from "firebase/analytics"
const firebaseConfig = {
  apiKey: "AIzaSyAqMrt89i57gSGiGqtLryaXG1czcty2ERA",
  authDomain: "chatapp-bebb5.firebaseapp.com",
  projectId: "chatapp-bebb5",
  storageBucket: "chatapp-bebb5.appspot.com",
  messagingSenderId: "745924671349",
  appId: "1:745924671349:web:f037e7fbe9d6a646e3853c",
  measurementId: "G-CYSPXVBHBG",
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)
// const analytics = getAnalytics(app)
const db = getFirestore(app)
const auth = getAuth(app)

export { db, auth ,app}
