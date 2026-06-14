import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBR8zH_ZSVdoPWbBBVCKWnOIe0MdF87vMs",
  authDomain: "web-portfolio-4ebac.firebaseapp.com",
  projectId: "web-portfolio-4ebac",
  storageBucket: "web-portfolio-4ebac.firebasestorage.app",
  messagingSenderId: "121773243720",
  appId: "1:121773243720:web:9a7e8bc6614ec71743c77d",
  measurementId: "G-NLH29PN2MW"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
