import { collection, addDoc } from "firebase/firestore";

import { getDocuments } from ".";
import { db } from "../../../config/firebase";

const COLLECTION = "drugs";

export const addDrug = async ({
  name,
  maximumDailyDosage,
  fastingBefore,
  fastingAfter,
  treatment,
  sideEffects,
}) => {
  const docRef = await addDoc(collection(db, COLLECTION), {
    name,
    maximumDailyDosage,
    fastingBefore,
    fastingAfter,
    treatment,
    sideEffects,
  });

  return docRef.id;
};

export const getDrugs = async () => {
  return getDocuments(COLLECTION);
};
