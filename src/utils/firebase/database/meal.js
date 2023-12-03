import { collection, addDoc } from "firebase/firestore";

import { getDocuments } from ".";
import { db } from "../../../config/firebase";

const COLLECTION = "meals";

export const addMeal = async ({ label, ingredients, calories }) => {
  const docRef = await addDoc(collection(db, COLLECTION), {
    label,
    ingredients,
    calories,
  });

  return docRef.id;
};

export const getMeals = async () => {
  return getDocuments(COLLECTION);
};
