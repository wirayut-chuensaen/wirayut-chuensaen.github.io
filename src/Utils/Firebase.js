import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDejkSZzPhWmc-U_LMnFjsWErUMbFbmGeQ",
  authDomain: "wirayut-chuensaen-github-b6b35.firebaseapp.com",
  databaseURL: "https://wirayut-chuensaen-github-b6b35-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "wirayut-chuensaen-github-b6b35",
  storageBucket: "wirayut-chuensaen-github-b6b35.appspot.com",
  messagingSenderId: "577694580939",
  appId: "1:577694580939:web:00f3ff07c2d6a2baed1b4e",
  measurementId: "G-G33CHJW5E5"
};

const app = initializeApp(firebaseConfig);
// console.log("firebase app : ", app)
const analytics = getAnalytics(app);
const db = getFirestore(app);

export { app, analytics, db };