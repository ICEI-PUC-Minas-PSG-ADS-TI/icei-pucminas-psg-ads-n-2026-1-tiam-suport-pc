// Arquivo: src/screens/ShopDetails.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

export default function ShopDetails({ route, navigation }) {
  // Pegamos os dados da loja que foram passados pelo clique no mapa
  const { shop } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{shop.name}</Text>
      
      <View style={styles.infoBox}>
        <Text style={styles.label}>📍 Localização:</Text>
        <Text style={styles.value}>Aproximadamente {shop.distance || 'perto de você'}</Text>
        
        <Text style={styles.label}>🛠 Serviços oferecidos:</Text>
        <Text style={styles.value}>{shop.services}</Text>
      </View>

      <TouchableOpacity 
        style={styles.buttonCall} 
        onPress={() => Alert.alert('Contato', `Iniciando chat com ${shop.name}...`)}
      >
        <Text style={styles.buttonText}>Solicitar Orçamento</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonBack} onPress={() => navigation.goBack()}>
        <Text style={styles.backText}>Voltar ao Mapa</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#f5f5f5', justifyContent: 'center' },
  title: { fontSize: 30, fontWeight: 'bold', color: '#2c3e50', marginBottom: 20, textAlign: 'center' },
  infoBox: { backgroundColor: '#fff', padding: 20, borderRadius: 15, elevation: 3, marginBottom: 30 },
  label: { fontSize: 16, fontWeight: 'bold', color: '#7f8c8d', marginTop: 10 },
  value: { fontSize: 18, color: '#333', marginBottom: 5 },
  buttonCall: { backgroundColor: '#27ae60', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  buttonBack: { marginTop: 20, alignItems: 'center' },
  backText: { color: '#3498db', fontSize: 16 }
});