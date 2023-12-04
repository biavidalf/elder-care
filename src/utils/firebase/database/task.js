import { collection, addDoc } from "firebase/firestore";

import { getDocuments } from ".";
import { db } from "../../../config/firebase";

const COLLECTION = "tasks";

export const addTask = async ({
  category,
  color,
  day,
  time,
  label,
  ...rest
}) => {
  const docRef = await addDoc(collection(db, COLLECTION), {
    category,
    color,
    day,
    time,
    label,
    ...rest,
  });

  return docRef.id;
};

export const addGeneralTask = async ({
  category,
  color,
  day,
  time,
  label,
  comments,
}) => {
  return await addTask({ category, color, day, time, label, comments });
};

export const addDrugTask = async ({
  category,
  color,
  day,
  time,
  label,
  quantity,
}) => {
  return await addTask({ category, color, day, time, label, quantity });
};

export const addNutritionTask = async ({
  category,
  color,
  day,
  time,
  label,
  ingredients,
}) => {
  return await addTask({ category, color, day, time, label, ingredients });
};

export const addPhysicalActivityTask = async ({
  category,
  color,
  day,
  time,
  label,
  location,
}) => {
  return await addTask({ category, color, day, time, label, location });
};

export const getTasks = async () => {
  return getDocuments(COLLECTION);
};
