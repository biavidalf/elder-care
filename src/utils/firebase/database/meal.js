import { collection, addDoc, getDocs } from "firebase/firestore";

import { db } from "../../../config/firebase";

const COLLECTION = "meals";

export const addMeal = async ({ label }) => {
  const docRef = await addDoc(collection(db, COLLECTION), { label });

  return docRef.id;
};

export const getMeals = async () => {
  const querySnapshot = await getDocs(collection(db, COLLECTION));
  const documents = [];
  querySnapshot.forEach((document) => {
    documents.push({ id: document.id, ...document.data() });
  });

  return documents;
};
