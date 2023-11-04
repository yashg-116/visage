// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCOuK2C_ae170J6QF442fmCmIEQn5nR9Tc",
  authDomain: "paperless-boarding-system.firebaseapp.com",
  databaseURL: "https://paperless-boarding-system-default-rtdb.firebaseio.com",
  projectId: "paperless-boarding-system",
  storageBucket: "paperless-boarding-system.appspot.com",
  messagingSenderId: "443459688884",
  appId: "1:443459688884:web:d530519c352c089349bae1",
  measurementId: "G-HBM7LM9MYK",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
// const app = firebase.initializeApp(firebaseConfig);
// const database = app.firestore();

// export const database = app.Database();
const app = initializeApp(firebaseConfig);
// const storage = firebase.storage()
export const database = getDatabase(app);
