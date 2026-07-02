import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import { doc, setDoc, getDoc } from 'firebase/firestore';
import { auth, db } from '../config/firebaseConfig';

export const cadastrarUsuario = async (nome, email, telefone, senha, tipo) => {
  const userCredential = await createUserWithEmailAndPassword(auth, email, senha);
  const uid = userCredential.user.uid;

  // Salva os dados do usuário no Firestore
  await setDoc(doc(db, 'usuarios', uid), {
    nome, email, telefone, tipo,
  });

  // Se for técnico, já cria o perfil da assistência automaticamente
  if (tipo === 'tecnico') {
    await setDoc(doc(db, 'assistencias', uid), {
      tecnicoId: uid,
      nome: `Assistência de ${nome}`,
      latitude: 0,
      longitude: 0,
      avaliacao: 5.0,
    });
  }
  return userCredential.user;
};

export const logarUsuario = async (email, senha) => {
  const userCredential = await signInWithEmailAndPassword(auth, email, senha);
  const uid = userCredential.user.uid;
  
  const userDoc = await getDoc(doc(db, 'usuarios', uid));
  if (userDoc.exists()) {
    return userDoc.data();
  } else {
    throw new Error('Usuário não localizado no banco de dados.');
  }
};

export const deslogarUsuario = async () => {
  await signOut(auth);
};