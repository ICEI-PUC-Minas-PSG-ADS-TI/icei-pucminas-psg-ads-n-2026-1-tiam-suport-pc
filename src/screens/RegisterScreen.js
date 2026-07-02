import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  Alert,
  ScrollView,
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

    if (!nome.trim()) {
      Alert.alert("Erro", "Informe seu nome.");
      return;
    }

    if (!email.trim()) {
      Alert.alert("Erro", "Informe seu e-mail.");
      return;
    }

    if (!telefone.trim()) {
      Alert.alert("Erro", "Informe seu telefone.");
      return;
    }

    if (senha.length < 6) {
      Alert.alert("Erro", "A senha deve possuir pelo menos 6 caracteres.");
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

      Alert.alert(
        "Sucesso",
        "Cadastro realizado com sucesso!",
        [
          {
            text: "OK",
            onPress: () => navigation.replace("Login")
          }
        ]
      );

    } catch (error) {

      console.log(error);

      switch (error.code) {

        case "auth/email-already-in-use":
          Alert.alert("Erro", "Este e-mail já está cadastrado.");
          break;

        case "auth/invalid-email":
          Alert.alert("Erro", "E-mail inválido.");
          break;

        case "auth/weak-password":
          Alert.alert("Erro", "Senha muito fraca.");
          break;

        default:
          Alert.alert("Erro", error.message);

      }

    } finally {

      setLoading(false);

    }

  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.backButton}
        >
          <Text style={styles.backText}>← Voltar</Text>
        </TouchableOpacity>

        <View style={styles.logoContainer}>
          <Text style={styles.logo}>🔧📱</Text>

          <Text style={styles.appName}>
            FixPhones
          </Text>

          <Text style={styles.subtitle}>
            Crie sua conta
          </Text>
        </View>

        <View style={styles.card}>
          <View style={styles.typeContainer}>
            <TouchableOpacity
              style={[
                styles.typeButton,
                userType === 'cliente' && styles.activeType
              ]}
              onPress={() => setUserType('cliente')}
            >
              <Text
                style={[
                  styles.typeText,
                  userType === 'cliente' && styles.activeTypeText
                ]}
              >
                Cliente
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[
                styles.typeButton,
                userType === 'tecnico' && styles.activeType
              ]}
              onPress={() => setUserType('tecnico')}
            >
              <Text
                style={[
                  styles.typeText,
                  userType === 'tecnico' && styles.activeTypeText
                ]}
              >
                Técnico
              </Text>
            </TouchableOpacity>
          </View>

          <TextInput
    style={styles.input}
    placeholder="Nome completo"
    placeholderTextColor="#999"
    value={nome}
    onChangeText={setNome}
/>

         <TextInput
    style={styles.input}
    placeholder="E-mail"
    placeholderTextColor="#999"
    keyboardType="email-address"
    autoCapitalize="none"
    value={email}
    onChangeText={setEmail}
/>

          <TextInput
    style={styles.input}
    placeholder="Telefone"
    placeholderTextColor="#999"
    keyboardType="phone-pad"
    value={telefone}
    onChangeText={setTelefone}
/>

         <TextInput
    style={styles.input}
    placeholder="Senha"
    placeholderTextColor="#999"
    secureTextEntry
    value={senha}
    onChangeText={setSenha}
/>

<TouchableOpacity
    style={styles.registerButton}
    onPress={handleRegister}
    disabled={loading}
>

    {
        loading ?

        <ActivityIndicator color="#FFFFFF"/>

        :

        <Text style={styles.registerButtonText}>
            Finalizar Cadastro
        </Text>

    }
</TouchableOpacity>

        </View>

        <TouchableOpacity
          onPress={() => navigation.navigate('Login')}
        >
          <Text style={styles.loginText}>
            Já possui uma conta? Entrar
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5'
  },

  content: {
    padding: 24,
    paddingTop: 30
  },

  backButton: {
    marginBottom: 15
  },

  backText: {
    color: '#3498DB',
    fontWeight: '600',
    fontSize: 16
  },

  logoContainer: {
    alignItems: 'center',
    marginBottom: 30
  },

  logo: {
    fontSize: 45
  },

  appName: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginTop: 10
  },

  subtitle: {
    color: '#7F8C8D',
    marginTop: 5,
    fontSize: 15
  },

  card: {
    backgroundColor: '#FFF',
    borderRadius: 18,
    padding: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOpacity: 0.08,
    shadowRadius: 8
  },

  typeContainer: {
    flexDirection: 'row',
    marginBottom: 20
  },

  typeButton: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#3498DB',
    padding: 12,
    alignItems: 'center'
  },

  activeType: {
    backgroundColor: '#3498DB'
  },

  typeText: {
    color: '#3498DB',
    fontWeight: '600'
  },

  activeTypeText: {
    color: '#FFF'
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

  registerButton: {
    backgroundColor: '#27AE60',
    height: 50,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 5
  },

  registerButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16
  },

  loginText: {
    textAlign: 'center',
    marginTop: 25,
    color: '#3498DB',
    fontWeight: '600'
  }
});