import { collection, addDoc } from "firebase/firestore";

import { getDocuments } from ".";
import { db } from "../../../config/firebase";

const COLLECTION = "precautions";

export const addPrecautions = async (title, description) => {
  const docRef = await addDoc(collection(db, COLLECTION), {
    title,
    description,
  });

  return docRef.id;
};

export const getPrecautions = async () => {
  return getDocuments(COLLECTION);
};
