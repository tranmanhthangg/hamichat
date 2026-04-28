import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "./config";

export const addDocument = (category, data) => {
    return addDoc(collection(db, category), {
        ...data,
        createdAt: serverTimestamp(),
    });
}


