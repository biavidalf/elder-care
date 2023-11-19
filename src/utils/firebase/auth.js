import { createUserWithEmailAndPassword } from "firebase/auth";

import { auth } from "../../config/firebase";
import { addUser } from "./database/user";

export const createUser = async (firstName, lastName, email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );

    await addUser(firstName, lastName, email);

    return userCredential.user;
  } catch ({ code }) {
    if (code === "auth/email-already-in-use") {
      throw new Error("E-mail já cadastrado.");
    }
  }
};
