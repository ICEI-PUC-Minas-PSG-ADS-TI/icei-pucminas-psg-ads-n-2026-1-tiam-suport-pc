import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
  ActivityIndicator
} from "react-native";

import FirebaseService from "../firebase/firebaseService";

export default function RegisterScreen({ navigation }) {

  const [userType, setUserType] = useState("cliente");

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [telefone, setTelefone] = useState("");
  const [senha, setSenha] = useState("");

  const [loading, setLoading] = useState(false);

  const handleRegister = async () => {

    if (!nome || !email || !telefone || !senha) {
      Alert.alert("Erro", "Preencha todos os campos.");
      return;
    }

    if (!email.includes("@")) {
      Alert.alert("Erro", "Email inválido.");
      return;
    }

    if (senha.length < 6) {
      Alert.alert("Erro", "Senha deve ter no mínimo 6 caracteres.");
      return;
    }

    try {
      setLoading(true);

      await FirebaseService.cadastrarUsuario({
        nome,
        email,
        telefone,
        senha,
        tipo: userType
      });

      Alert.alert("Sucesso", "Cadastro realizado!", [
        { text: "OK", onPress: () => navigation.replace("Login") }
      ]);

    } catch (error) {
      console.log(error);

      Alert.alert("Erro", error.message);

    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>

        <Text style={styles.title}>Criar Conta</Text>

        <View style={styles.card}>

          <View style={styles.typeContainer}>

            <TouchableOpacity
              style={[
                styles.typeButton,
                userType === "cliente" && styles.activeType
              ]}
              onPress={() => setUserType("cliente")}
            >
              <Text style={styles.typeText}>Cliente</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.typeButton,
                userType === "tecnico" && styles.activeType
              ]}
              onPress={() => setUserType("tecnico")}
            >
              <Text style={styles.typeText}>Técnico</Text>
            </TouchableOpacity>

          </View>

          <TextInput
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            style={styles.input}
          />

          <TextInput
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            style={styles.input}
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Telefone"
            value={telefone}
            onChangeText={setTelefone}
            style={styles.input}
            keyboardType="phone-pad"
          />

          <TextInput
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            style={styles.input}
            secureTextEntry
          />

          <TouchableOpacity
            style={styles.button}
            onPress={handleRegister}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>
                Cadastrar
              </Text>
            )}
          </TouchableOpacity>

        </View>

      </ScrollView>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#F5F5F5"
  },

  content: {
    padding: 20,
    paddingTop: 40
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20
  },

  card: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 15
  },

  typeContainer: {
    flexDirection: "row",
    marginBottom: 15
  },

  typeButton: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    marginHorizontal: 5,
    alignItems: "center"
  },

  activeType: {
    backgroundColor: "#3498db"
  },

  typeText: {
    color: "#000"
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginBottom: 10,
    padding: 10,
    borderRadius: 8
  },

  button: {
    backgroundColor: "#27ae60",
    padding: 15,
    alignItems: "center",
    borderRadius: 10,
    marginTop: 10
  },

  buttonText: {
    color: "#fff",
    fontWeight: "bold"
  }

});