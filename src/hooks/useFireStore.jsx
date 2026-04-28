import { db } from "../firebase/config";
import { useEffect, useState } from "react";
import { onSnapshot, collection, orderBy, query, where } from "firebase/firestore";


const useFireStore = (name, condition) => {
    const [documents, setDocuments] = useState([]);

    useEffect(() => {
        const collectionRef = collection(db, name);
        let q = query(collectionRef, orderBy("createdAt"));

        if (condition) {
            if (
                condition.compareValue === undefined ||
                condition.compareValue === null ||
                (Array.isArray(condition.compareValue) && !condition.compareValue.length)
            ) {
                return;
            }

            q = query(
                collectionRef,
                where(condition.fieldName, condition.operator, condition.compareValue),
                orderBy("createdAt")
            );
        }

        const unSubscribe = onSnapshot(q, (snapshot) => {
            const documents = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data()
            }));

            setDocuments(documents);
        });

        return unSubscribe;
    }, [name, condition]);

    return documents;
}

export default useFireStore;
