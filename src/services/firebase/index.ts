import firebase from "firebase/app"
import "firebase/auth"
import "firebase/firestore"

export const Firebase = (() => {
  firebase.initializeApp({
    apiKey: `${process.env.GATSBY_FIREBASE_API_KEY}`,
    authDomain: `${process.env.GATSBY_FIREBASE_AUTHDOMAIN}`,
    projectId: `${process.env.GATSBY_FIREBASE_PROJECT_ID}`,
    appId: `${process.env.GATSBY_FIREBASE_APP_ID}`,
  })

  return {
    auth: firebase.auth(),
    db: firebase.firestore(),
  }
})()
