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
  } catch (error) {
    if (error.code === "auth/email-already-in-use") {
      throw new Error("E-mail já cadastrado.");
    }

    throw new Error(error);
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
  } catch (error) {
    switch (error.code) {
      case "auth/invalid-login-credentials":
        throw new Error("Endereço de e-mail e/ou senha inválidos.");
      case "auth/too-many-requests":
        throw new Error(
          "Muitas tentivas consecutivas. Por favor tente novamente daqui alguns segundos."
        );
    }

    throw new Error(error);
  }
};
