// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getReactNativePersistence, initializeAuth} from "firebase/auth"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDQ3Iy1tOFE24sN9BVTgThC_yA0fSdF8fQ",
  authDomain: "expense-tracker-ee943.firebaseapp.com",
  projectId: "expense-tracker-ee943",
  storageBucket: "expense-tracker-ee943.firebasestorage.app",
  messagingSenderId: "587363133968",
  appId: "1:587363133968:web:a251739854f9de2fbe3895"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// auth
export const auth= initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

// db
export const firestore = getFirestore(app);