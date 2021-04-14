import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"
import "firebase/storage"

const app = firebase.initializeApp({
  apiKey: "AIzaSyDbC5asTVmVADNi1gxQhdDXlXHRJjl8qAY",
  authDomain: "fire-auth-dev-ab46e.firebaseapp.com",
  projectId: "fire-auth-dev-ab46e",
  storageBucket: "fire-auth-dev-ab46e.appspot.com",
  messagingSenderId: "809289584701",
  appId: "1:809289584701:web:5d7e7ab8c032657471da54"
})

const firestore = app.firestore()
export const batch = firestore.batch()
export const database = {
  folders: firestore.collection("folders"),
  files: firestore.collection("files"),
  formatDoc: doc => {
    return { id: doc.id, ...doc.data() }
  },
  getCurrentTimestamp: firebase.firestore.FieldValue.serverTimestamp,
}
export const storage = app.storage()
export const auth = app.auth()
export default app