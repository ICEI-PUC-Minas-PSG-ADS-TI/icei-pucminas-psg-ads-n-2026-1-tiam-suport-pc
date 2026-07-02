import { collection, getDocs, addDoc, query, orderBy, onSnapshot, serverTimestamp } from 'firebase/firestore';
import { db } from '../config/firebaseConfig';

// -- MAPA --
export const getAssistencias = async () => {
  const assistenciasCol = collection(db, 'assistencias');
  const snapshot = await getDocs(assistenciasCol);
  return snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
};

// -- AGENDAMENTOS --
export const criarAgendamento = async (dadosAgendamento) => {
  const agendamentosCol = collection(db, 'agendamentos');
  const docRef = await addDoc(agendamentosCol, dadosAgendamento);
  return docRef.id;
};

// -- CHAT --
export const gerarIdDoChat = (idUsuario1, idUsuario2) => {
  return idUsuario1 < idUsuario2 ? `${idUsuario1}_${idUsuario2}` : `${idUsuario2}_${idUsuario1}`;
};

export const enviarMensagem = async (chatId, remetenteId, texto) => {
  const mensagensCol = collection(db, 'chats', chatId, 'mensagens');
  await addDoc(mensagensCol, {
    remetenteId,
    texto,
    dataHora: serverTimestamp(),
  });
};

export const ouvirMensagens = (chatId, setMensagens) => {
  const mensagensCol = collection(db, 'chats', chatId, 'mensagens');
  const q = query(mensagensCol, orderBy('dataHora', 'asc'));

  const unsubscribe = onSnapshot(q, (snapshot) => {
    const msgs = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    setMensagens(msgs);
  });
  return unsubscribe;
};