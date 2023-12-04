import { collection, addDoc } from "firebase/firestore";

import { getDocuments } from ".";
import { db } from "../../../config/firebase";

const COLLECTION = "restrictionLevel";

export const addRestrictionLevel = async ({ label, value }) => {
  const docRef = await addDoc(collection(db, COLLECTION), { label, value });

  return docRef.id;
};

export const getRestrictionLevels = async () => {
  return getDocuments(COLLECTION);
};
