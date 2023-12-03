import { collection, addDoc } from "firebase/firestore";

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
  const querySnapshot = await getDocs(collection(db, COLLECTION));
  const documents = [];
  querySnapshot.forEach((document) => {
    documents.push(document.data());
  });

  return documents;
};

