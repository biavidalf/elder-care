import { collection, getDocs } from "@firebase/firestore";

import { db } from "../../../config/firebase";

export const getDocuments = async (collectionName) => {
  const querySnapshot = await getDocs(collection(db, collectionName));
  const documents = [];
  querySnapshot.forEach((document) => {
    documents.push({ id: document.id, ...document.data() });
  });

  return documents;
};
