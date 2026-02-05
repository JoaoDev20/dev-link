
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyC3c5SeSra62hRMVM06UCxaZKDyasaDeFM",
  authDomain: "devlinks-26dca.firebaseapp.com",
  projectId: "devlinks-26dca",
  storageBucket: "devlinks-26dca.firebasestorage.app",
  messagingSenderId: "202235385749",
  appId: "1:202235385749:web:6ebc1a43edb3f8941d089c",
  measurementId: "G-BWG0HEN27X"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app)

export { auth, db };