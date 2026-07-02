import { auth, db } from "./firebaseConfig";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut
} from "firebase/auth";

import {
  doc,
  setDoc,
  getDoc,
  serverTimestamp
} from "firebase/firestore";

class FirebaseService {

  async cadastrarUsuario({
    nome,
    email,
    telefone,
    senha,
    tipo
  }) {

    const credential =
      await createUserWithEmailAndPassword(
        auth,
        email,
        senha
      );

    const uid = credential.user.uid;

    await setDoc(doc(db, "usuarios", uid), {
      nome,
      email,
      telefone,
      tipo,
      criadoEm: serverTimestamp()
    });

    return credential.user;
  }

  async login(email, senha) {

    const credential =
      await signInWithEmailAndPassword(
        auth,
        email,
        senha
      );

    const uid = credential.user.uid;

    const documento =
      await getDoc(doc(db, "usuarios", uid));

    return {
      user: credential.user,
      dados: documento.data()
    };
  }

  async logout() {
    await signOut(auth);
  }

}

export default new FirebaseService();