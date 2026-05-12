// Arquivo: src/screens/ShopHome.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert } from 'react-native';

export default function ShopHome({ navigation }) {
  const [serviceName, setServiceName] = useState('');
  const [price, setPrice] = useState('');

  const handleRegisterService = () => {
    if (!serviceName || !price) {
      Alert.alert('Erro', 'Preencha todos os campos.');
      return;
    }
    Alert.alert('Sucesso', `Serviço "${serviceName}" cadastrado por R$${price}!`);
    setServiceName('');
    setPrice('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Painel da Loja</Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.subtitle}>Cadastre um novo serviço:</Text>

      <View style={styles.form}>
        <Text style={styles.label}>Nome do Serviço:</Text>
        <TextInput 
          style={styles.input} 
          value={serviceName}
          onChangeText={setServiceName}
          placeholder="Ex: Troca de Tela iPhone 13"
        />

        <Text style={styles.label}>Preço (R$):</Text>
        <TextInput 
          style={styles.input} 
          value={price}
          onChangeText={setPrice}
          placeholder="Ex: 150.00"
          keyboardType="numeric"
        />

        <TouchableOpacity style={styles.buttonSubmit} onPress={handleRegisterService}>
          <Text style={styles.buttonText}>Cadastrar Serviço</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5' },
  header: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 5 },
  title: { fontSize: 24, fontWeight: 'bold', color: '#2c3e50' },
  logoutText: { color: '#e74c3c', fontWeight: 'bold', fontSize: 16 },
  subtitle: { fontSize: 16, color: '#7f8c8d', marginBottom: 20 },
  form: { backgroundColor: '#fff', padding: 20, borderRadius: 10, elevation: 2 },
  label: { fontSize: 14, fontWeight: 'bold', marginBottom: 5, color: '#333' },
  input: { borderWidth: 1, borderColor: '#ccc', borderRadius: 5, padding: 10, marginBottom: 15, fontSize: 16 },
  buttonSubmit: { backgroundColor: '#27ae60', padding: 15, borderRadius: 5, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});