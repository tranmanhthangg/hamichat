import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

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
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

export {analytics, auth, db};
