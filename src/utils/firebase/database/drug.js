import { collection, addDoc } from "firebase/firestore";

import { db } from "../../../config/firebase";

export const addDrug = async (
  name,
  maximumDailyDosage,
  treatment,
  fastingPeriod,
  sideEffects
) => {
  const docRef = await addDoc(collection(db, "drugs"), {
    name,
    maximumDailyDosage,
    treatment,
    fastingPeriod,
    sideEffects,
  });

  return docRef.id;
};
