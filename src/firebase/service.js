import { addDoc, collection } from "firebase/firestore";
import { db } from "./config";

export const addDocument = (category, data) => {
    return addDoc(collection(db, category), { ...data });
}