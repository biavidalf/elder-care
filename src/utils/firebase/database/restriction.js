import { collection, addDoc, getDocs } from "firebase/firestore";

import { db } from "../../../config/firebase";

const COLLECTION = "restrictions";

export const addRestriction = async ({ label, color }) => {
  const docRef = await addDoc(collection(db, COLLECTION), {
    label,
    color,
  });

  return docRef.id;
};

export const getRestrictions = async () => {
  const querySnapshot = await getDocs(collection(db, COLLECTION));
  const documents = [];
  querySnapshot.forEach((document) => {
    documents.push({ id: document.id, ...document.data() });
  });

  return documents;
};
