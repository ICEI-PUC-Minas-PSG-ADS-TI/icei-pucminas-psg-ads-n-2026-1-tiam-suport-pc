// Arquivo: src/screens/LoginScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo!</Text>
      <TextInput style={styles.input} placeholder="E-mail" keyboardType="email-address" />
      <TextInput style={styles.input} placeholder="Senha" secureTextEntry={true} />
      
      <TouchableOpacity 
        style={styles.buttonMain} 
        onPress={() => navigation.replace('ClientHome')}
      >
        <Text style={styles.buttonText}>Entrar como Cliente</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={[styles.buttonMain, { backgroundColor: '#e67e22', marginTop: 10 }]} 
        onPress={() => navigation.replace('ShopHome')}
      >
        <Text style={styles.buttonText}>Entrar como Loja</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#f5f5f5' },
  title: { fontSize: 28, fontWeight: 'bold', color: '#2c3e50', marginBottom: 20, textAlign: 'center' },
  input: { backgroundColor: '#fff', borderWidth: 1, borderColor: '#ddd', borderRadius: 8, padding: 15, marginBottom: 15 },
  buttonMain: { backgroundColor: '#3498db', padding: 15, borderRadius: 8, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});