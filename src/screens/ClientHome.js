// Arquivo: src/screens/ClientHome.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ActivityIndicator, Alert } from 'react-native';
import MapView, { Marker, Callout } from 'react-native-maps';
import * as Location from 'expo-location';

export default function ClientHome({ navigation }) {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [shops, setShops] = useState([]);

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert('Erro', 'Precisamos do GPS para achar lojas perto de você.');
        setLoading(false);
        return;
      }

      let userLocation = await Location.getCurrentPositionAsync({});
      const { latitude, longitude } = userLocation.coords;
      setLocation(userLocation.coords);

      // GERADOR AUTOMÁTICO DE LOJAS PRÓXIMAS (Para teste)
      // Criamos 3 lojas somando ou subtraindo um pouquinho da sua latitude real
      const mockShops = [
        { id: '1', name: 'Conserta Smart', latitude: latitude + 0.002, longitude: longitude + 0.002, services: 'Telas, Baterias e Conectores' },
        { id: '2', name: 'Doutor Celular', latitude: latitude - 0.002, longitude: longitude - 0.002, services: 'Placa-mãe e Limpeza Química' },
        { id: '3', name: 'Oficina do Mobile', latitude: latitude + 0.003, longitude: longitude - 0.003, services: 'Software, Unbrick e Películas' },
      ];
      setShops(mockShops);
      setLoading(false);
    })();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Assistências Próximas</Text>
        <TouchableOpacity onPress={() => navigation.replace('Login')}>
          <Text style={styles.logoutText}>Sair</Text>
        </TouchableOpacity>
      </View>

      {loading ? (
        <View style={styles.loadingContainer}>
          <ActivityIndicator size="large" color="#3498db" />
          <Text style={styles.loadingText}>Localizando lojas próximas...</Text>
        </View>
      ) : (
        <MapView 
          style={styles.map}
          initialRegion={{
            latitude: location.latitude,
            longitude: location.longitude,
            latitudeDelta: 0.01,
            longitudeDelta: 0.01,
          }}
          showsUserLocation={true}
        >
          {shops.map((shop) => (
            <Marker
              key={shop.id}
              coordinate={{ latitude: shop.latitude, longitude: shop.longitude }}
              pinColor="red"
            >
              {/* O Callout é o balãozinho que aparece ao clicar no pino */}
              <Callout onPress={() => navigation.navigate('ShopDetails', { shop })}>
                <View style={styles.calloutBox}>
                  <Text style={styles.shopName}>{shop.name}</Text>
                  <Text style={styles.shopTap}>Clique para ver detalhes</Text>
                </View>
              </Callout>
            </Marker>
          ))}
        </MapView>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  header: { flexDirection: 'row', justifyContent: 'space-between', padding: 20, paddingTop: 50, backgroundColor: '#fff', elevation: 4 },
  title: { fontSize: 18, fontWeight: 'bold' },
  logoutText: { color: '#e74c3c', fontWeight: 'bold' },
  map: { width: '100%', height: '100%' },
  loadingContainer: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loadingText: { marginTop: 10, color: '#7f8c8d' },
  calloutBox: { padding: 10, width: 150 },
  shopName: { fontWeight: 'bold', textAlign: 'center' },
  shopTap: { fontSize: 10, color: '#3498db', textAlign: 'center', marginTop: 5 }
});