import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  ActivityIndicator
} from "react-native";

import FirebaseService from "../firebase/firebaseService";

export default function LoginScreen({ navigation }) {

  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);

  const handleLogin = async (tipoSelecionado) => {

    if (!email || !senha) {
      Alert.alert("Erro", "Preencha email e senha.");
      return;
    }

    try {
      setLoading(true);

      const { user, dados } = await FirebaseService.login(email, senha);

      if (!dados) {
        Alert.alert("Erro", "Usuário não encontrado no banco.");
        return;
      }

      // valida tipo (cliente ou tecnico)
      if (dados.tipo !== tipoSelecionado) {
        Alert.alert(
          "Acesso negado",
          `Este login não é de ${tipoSelecionado}.`
        );
        return;
      }

      // navegação correta
      if (tipoSelecionado === "cliente") {
        navigation.replace("ClientHome");
      } else {
        navigation.replace("ShopHome");
      }

    } catch (error) {

      console.log(error);

      switch (error.code) {

        case "auth/user-not-found":
          Alert.alert("Erro", "Usuário não encontrado.");
          break;

        case "auth/wrong-password":
          Alert.alert("Erro", "Senha incorreta.");
          break;

        case "auth/invalid-email":
          Alert.alert("Erro", "Email inválido.");
          break;

        default:
          Alert.alert("Erro", "Falha ao fazer login.");
      }

    } finally {
      setLoading(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.content}>

        {/* LOGO */}
        <View style={styles.logoContainer}>
          <Text style={styles.logo}>🔧📱</Text>
          <Text style={styles.appName}>FixPhones</Text>
          <Text style={styles.subtitle}>Faça login na sua conta</Text>
        </View>

        {/* CARD */}
        <View style={styles.card}>

          <TextInput
            placeholder="E-mail"
            keyboardType="email-address"
            autoCapitalize="none"
            style={styles.input}
            value={email}
            onChangeText={setEmail}
          />

          <TextInput
            placeholder="Senha"
            secureTextEntry
            style={styles.input}
            value={senha}
            onChangeText={setSenha}
          />

          {/* BOTÃO CLIENTE */}
          <TouchableOpacity
            style={styles.clientButton}
            onPress={() => handleLogin("cliente")}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>
                Entrar como Cliente
              </Text>
            )}
          </TouchableOpacity>

          {/* DIVISOR */}
          <View style={styles.dividerContainer}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>ou</Text>
            <View style={styles.line} />
          </View>

          {/* BOTÃO TÉCNICO */}
          <TouchableOpacity
            style={styles.shopButton}
            onPress={() => handleLogin("tecnico")}
            disabled={loading}
          >
            {loading ? (
              <ActivityIndicator color="#fff" />
            ) : (
              <Text style={styles.buttonText}>
                Entrar como Técnico
              </Text>
            )}
          </TouchableOpacity>

        </View>

        {/* REGISTRO */}
        <TouchableOpacity
          onPress={() => navigation.navigate("Register")}
        >
          <Text style={styles.registerText}>
            Não tem conta? Cadastre-se
          </Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },

  content: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 24
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 40
  },

  logo: {
    fontSize: 50,
    marginBottom: 10
  },

  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2C3E50'
  },

  subtitle: {
    marginTop: 8,
    color: '#7F8C8D',
    fontSize: 15
  },

  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 18,
    padding: 20,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8,
    elevation: 3
  },

  input: {
    height: 50,
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 15,
    backgroundColor: '#FAFAFA',
    marginBottom: 15
  },

  clientButton: {
    backgroundColor: '#3498DB',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  shopButton: {
    backgroundColor: '#E67E22',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center'
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  },

  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18
  },

  line: {
    flex: 1,
    height: 1,
    backgroundColor: '#DADADA'
  },

  dividerText: {
    marginHorizontal: 10,
    color: '#7F8C8D'
  },

  registerText: {
    textAlign: 'center',
    marginTop: 25,
    color: '#3498DB',
    fontWeight: '600'
  }
});