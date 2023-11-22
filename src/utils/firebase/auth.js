import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

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

export const authenticateUser = async (email, password) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );

    return userCredential.user;
  } catch ({ code }) {
    if (code === "auth/invalid-login-credentials") {
      throw new Error("Endereço de e-mail e/ou senha inválidos.");
    }
  }
};
