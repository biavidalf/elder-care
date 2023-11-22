import { collection, addDoc, getDocs } from "firebase/firestore";

import { db } from "../../../config/firebase";

const COLLECTION = "drugs";

export const addDrug = async (
  name,
  maximumDailyDosage,
  treatment,
  fastingPeriod,
  sideEffects
) => {
  const docRef = await addDoc(collection(db, COLLECTION), {
    name,
    maximumDailyDosage,
    treatment,
    fastingPeriod,
    sideEffects,
  });

  return docRef.id;
};

export const getDrugs = async () => {
  const querySnapshot = await getDocs(collection(db, COLLECTION));
  const documents = [];
  querySnapshot.forEach((document) => {
    documents.push({ id: document.id, ...document.data() });
  });

  return documents;
};
