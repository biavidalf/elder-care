import { collection, addDoc } from "firebase/firestore";

import { getDocuments } from ".";
import { db } from "../../../config/firebase";

const COLLECTION = "precautions";

export const addPrecaution = async ({ label, description }) => {
  const docRef = await addDoc(collection(db, COLLECTION), {
    label,
    description,
  });

  return docRef.id;
};

export const getPrecautions = async () => {
  return getDocuments(COLLECTION);
};
