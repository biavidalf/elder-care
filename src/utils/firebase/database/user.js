import { collection, addDoc } from "firebase/firestore";

import { db } from "../../../config/firebase";

import { getDocuments } from ".";

const COLLECTION = "users";

export const addUser = async (firstName, lastName, email) => {
  const docRef = await addDoc(collection(db, COLLECTION), {
    firstName,
    lastName,
    email,
  });

  return docRef.id;
};

export const getUsers = async () => {
  return getDocuments(COLLECTION);
};
