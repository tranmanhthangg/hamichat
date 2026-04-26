import { initializeApp } from "firebase/app";
import { connectAuthEmulator, getAuth } from "firebase/auth";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDTjqywdEZU25l7pPl_UMHG9B5pzhma8GY",
  authDomain: "hamichat.firebaseapp.com",
  projectId: "hamichat",
  storageBucket: "hamichat.firebasestorage.app",
  messagingSenderId: "402748019441",
  appId: "1:402748019441:web:169a1899ab609f96b98f50",
  measurementId: "G-X9ZLCGML78"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

if (window.location.hostname === "localhost") {
  connectAuthEmulator(auth, "http://localhost:9099");
  connectFirestoreEmulator(db, "localhost", 8080);
}

export {auth, db};
