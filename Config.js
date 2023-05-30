import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTeYDfn_XuQEsTDV55Bm48UhenwlyPCik",
  authDomain: "myapp-ae142.firebaseapp.com",
  databaseURL: "https://myapp-ae142-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "myapp-ae142",
  storageBucket: "myapp-ae142.appspot.com",
  messagingSenderId: "419680472948",
  appId: "1:419680472948:web:eb770e543e25cfd49ae621",
  measurementId: "G-SG8B4MXXB3"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  db,
  collection,
  getDocs,
  addDoc,
  onSnapshot,
  doc,
  deleteDoc,
  updateDoc,
  query,
  where,
};
