import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const firebaseConfig = {
  // TODO
}

console.log(firebase)

firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const googleProvider = new firebase.auth.GoogleAuthProvider()
export const emailProvider = new firebase.auth.EmailAuthProvider()

export const db = firebase.firestore()
