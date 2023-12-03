import { collection, addDoc } from "firebase/firestore";

import { getDocuments } from ".";
import { db } from "../../../config/firebase";

const COLLECTION = "meals";

export const addMeal = async ({ label }) => {
  const docRef = await addDoc(collection(db, COLLECTION), { label });

  return docRef.id;
};

export const getMeals = async () => {
  return getDocuments(COLLECTION);
};
