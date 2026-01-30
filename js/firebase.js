import { initializeApp } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/12.8.0/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBkaufHDfZ1d_hZRsk8oDsdzfoIMMWUmhs",
  authDomain: "dura-d4db6.firebaseapp.com",
  projectId: "dura-d4db6",
  storageBucket: "dura-d4db6.firebasestorage.app",
  messagingSenderId: "970210050591",
  appId: "1:970210050591:web:f16cfa00b030d289594b2a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
