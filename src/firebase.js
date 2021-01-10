import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// const app = firebase.initializeApp({
//   apiKey: process.env.SHOPPEE_APP_FIREBASE_API_KEY,
//   authDomain: process.env.SHOPPEE_APP_FIREBASE_AUTH_DOMAIN,
//   databaseURL: process.env.SHOPPEE_APP_FIREBASE_DATABASE_URL,
//   projectId: process.env.SHOPPEE_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.SHOPPEE_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.SHOPPEE_APP_FIREBASE_MESSAGEINGSENDER_ID,
//   appId: process.env.SHOPPEE_APP_FIREBASE_APPAPI,
// });

// export const auth = app.auth();
// export const db = app.firestore();
// export default app;
firebase.initializeApp({
  apiKey: "AIzaSyBwWFM4hWWhbgRzFxadUDrda0xUALsgF9g",
  authDomain: "shoppee-clone.firebaseapp.com",
  databaseURL: "https://shoppee-clone.firebaseio.com",
  projectId: "shoppee-clone",
  storageBucket: "shoppee-clone.appspot.com",
  messagingSenderId: "223102801590",
  appId: "1:223102801590:web:07945611ed728e93ddf817",
});

export const auth = firebase.auth();
export const db = firebase.firestore();
