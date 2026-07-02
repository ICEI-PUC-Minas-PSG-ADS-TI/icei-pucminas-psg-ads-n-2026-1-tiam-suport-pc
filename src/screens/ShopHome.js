import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  ActivityIndicator,
  Alert,
} from 'react-native';

import { auth, db } from '../firebase/firebaseConfig';
import FirebaseService from '../firebase/firebaseService';

import {
  doc,
  getDoc,
  collection,
  query,
  where,
  getDocs,
} from 'firebase/firestore';

export default function ShopHome({ navigation }) {

  const [loading, setLoading] = useState(true);

  const [nomeTecnico, setNomeTecnico] = useState('');

  const [totalServicos, setTotalServicos] = useState(0);

  const [servicosAtivos, setServicosAtivos] = useState(0);

  const [servicosConcluidos, setServicosConcluidos] = useState(0);

  useEffect(() => {

    carregarDados();

  }, []);

  async function carregarDados() {

    try {

      const uid = auth.currentUser.uid;

      // Dados do técnico

      const usuario = await getDoc(
        doc(db, "usuarios", uid)
      );

      if (usuario.exists()) {

        setNomeTecnico(usuario.data().nome);

      }

      // Serviços cadastrados pelo técnico

      const q = query(
        collection(db, "servicos"),
        where("userId", "==", uid)
      );

      const snapshot = await getDocs(q);

      const lista = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));

      setTotalServicos(lista.length);

      setServicosAtivos(
        lista.filter(item => item.status === "ativo").length
      );

      setServicosConcluidos(
        lista.filter(item => item.status === "concluido").length
      );

    }
    catch (error) {

      console.log(error);

      Alert.alert(
        "Erro",
        "Não foi possível carregar os dados."
      );

    }
    finally {

      setLoading(false);

    }

  }

  async function sair() {

    try {

      await FirebaseService.logout();

      navigation.replace("Login");

    }
    catch (error) {

      Alert.alert("Erro", error.message);

    }

  }

  if (loading) {

    return (

      <View style={styles.loadingContainer}>

        <ActivityIndicator
          size="large"
          color="#3498DB"
        />

      </View>

    );

  }

  return (

    <ScrollView
      style={styles.container}
      showsVerticalScrollIndicator={false}
    >

      {/* Cabeçalho */}

      <View style={styles.header}>

        <Text style={styles.logo}>
          FixPhones
        </Text>

        <Text style={styles.title}>
          Painel da Assistência
        </Text>

        <Text style={styles.subtitle}>
          Bem-vindo, {nomeTecnico}
        </Text>

        <Text style={styles.description}>
          Gerencie seus serviços e acompanhe seus atendimentos.
        </Text>

      </View>

      {/* Resumo */}

      <View style={styles.summaryCard}>

        <Text style={styles.cardTitle}>
          Resumo
        </Text>

        <View style={styles.summaryRow}>

          <Text style={styles.summaryLabel}>
            📱 Serviços Cadastrados
          </Text>

          <Text style={styles.summaryValue}>
            {totalServicos}
          </Text>

        </View>

        <View style={styles.summaryRow}>

          <Text style={styles.summaryLabel}>
            🟢 Ativos
          </Text>

          <Text style={styles.summaryValue}>
            {servicosAtivos}
          </Text>

        </View>

        <View style={styles.summaryRow}>

          <Text style={styles.summaryLabel}>
            ✅ Concluídos
          </Text>

          <Text style={styles.summaryValue}>
            {servicosConcluidos}
          </Text>

        </View>

      </View>

      {/* Agenda */}

      <TouchableOpacity
        style={styles.actionButtonBlue}
        onPress={() =>
          navigation.navigate("TechnicianAgenda")
        }
      >

        <View>

          <Text style={styles.actionTitle}>
            📅 Minha Agenda
          </Text>

          <Text style={styles.actionSubtitle}>
            Visualize seus atendimentos.
          </Text>

        </View>

        <Text style={styles.arrow}>
          ›
        </Text>

      </TouchableOpacity>

      {/* Cadastro */}

      <TouchableOpacity
        style={styles.actionButtonGreen}
        onPress={() =>
          navigation.navigate("ServiceRegister")
        }
      >

        <View>

          <Text style={styles.actionTitle}>
            ➕ Cadastrar Serviço
          </Text>

          <Text style={styles.actionSubtitle}>
            Adicione um novo serviço.
          </Text>

        </View>

        <Text style={styles.arrow}>
          ›
        </Text>

      </TouchableOpacity>

      {/* Atualizar */}

      <TouchableOpacity
        style={styles.refreshButton}
        onPress={carregarDados}
      >

        <Text style={styles.refreshText}>
          Atualizar Dados
        </Text>

      </TouchableOpacity>

      {/* Logout */}

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={sair}
      >

        <Text style={styles.logoutText}>
          Sair da Conta
        </Text>

      </TouchableOpacity>

    </ScrollView>

  );

}

const styles = StyleSheet.create({

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingHorizontal: 20,
  },

  header: {
    marginTop: 55,
    marginBottom: 30,
  },

  logo: {
    fontSize: 34,
    fontWeight: 'bold',
    color: '#3498DB',
  },

  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginTop: 8,
  },

  subtitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#34495E',
    marginTop: 12,
  },

  description: {
    fontSize: 15,
    color: '#7F8C8D',
    marginTop: 6,
    lineHeight: 22,
  },

  summaryCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 22,
    marginBottom: 25,
    elevation: 3,
  },

  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 20,
  },

  summaryRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },

  summaryLabel: {
    fontSize: 16,
    color: '#555',
  },

  summaryValue: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#3498DB',
  },

  actionButtonBlue: {
    backgroundColor: '#3498DB',
    borderRadius: 18,
    padding: 20,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },

  actionButtonGreen: {
    backgroundColor: '#27AE60',
    borderRadius: 18,
    padding: 20,
    marginBottom: 18,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
  },

  actionTitle: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },

  actionSubtitle: {
    color: '#EAF6FF',
    fontSize: 14,
    marginTop: 6,
  },

  arrow: {
    color: '#FFFFFF',
    fontSize: 36,
    fontWeight: 'bold',
  },

  refreshButton: {
    backgroundColor: '#F39C12',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 15,
  },

  refreshText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  logoutButton: {
    backgroundColor: '#E74C3C',
    height: 55,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },

  logoutText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },

});