import { collection, addDoc } from "firebase/firestore";

import { db } from "../../../config/firebase";

export const addUser = async (firstName, lastName, email) => {
  const docRef = await addDoc(collection(db, "users"), {
    firstName,
    lastName,
    email,
  });

  return docRef.id;
};
