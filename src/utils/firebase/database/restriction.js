import { collection, addDoc } from "firebase/firestore";

import { getDocuments } from ".";
import { db } from "../../../config/firebase";

const COLLECTION = "restrictions";

export const addRestriction = async ({ label, color, suggestion }) => {
  const docRef = await addDoc(collection(db, COLLECTION), {
    label,
    color,
    suggestion,
  });

  return docRef.id;
};

export const getRestrictions = async () => {
  return getDocuments(COLLECTION);
};
