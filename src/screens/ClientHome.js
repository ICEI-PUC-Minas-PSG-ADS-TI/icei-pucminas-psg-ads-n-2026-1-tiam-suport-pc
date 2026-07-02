import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  FlatList,
  ActivityIndicator,
  Alert,
} from 'react-native';

import MapView, { Marker } from 'react-native-maps';
import * as Location from 'expo-location';

export default function ClientHome({ navigation }) {
  const [location, setLocation] = useState(null);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState('');

  const [shops, setShops] = useState([]);

  useEffect(() => {
    (async () => {
      const { status } =
        await Location.requestForegroundPermissionsAsync();

      if (status !== 'granted') {
        Alert.alert(
          'Permissão necessária',
          'Precisamos acessar sua localização.'
        );

        setLoading(false);
        return;
      }

      const currentLocation =
        await Location.getCurrentPositionAsync({});

      const { latitude, longitude } =
        currentLocation.coords;

      setLocation(currentLocation.coords);

      setShops([
        {
          id: '1',
          name: 'Conserta Smart',
          services: 'Tela, Bateria e Conector',
          latitude: latitude + 0.002,
          longitude: longitude + 0.002,
        },
        {
          id: '2',
          name: 'Doutor Celular',
          services: 'Placa e Software',
          latitude: latitude - 0.002,
          longitude: longitude - 0.002,
        },
        {
          id: '3',
          name: 'Oficina Mobile',
          services: 'Limpeza e Recuperação',
          latitude: latitude + 0.003,
          longitude: longitude - 0.002,
        },
      ]);

      setLoading(false);
    })();
  }, []);

  const filteredShops = shops.filter((shop) =>
    shop.name
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator
          size="large"
          color="#3498DB"
        />

        <Text style={styles.loadingText}>
          Procurando assistências...
        </Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Assistências Próximas
        </Text>

        <TouchableOpacity
          onPress={() =>
            navigation.replace('Login')
          }
        >
          <Text style={styles.logout}>
            Sair
          </Text>
        </TouchableOpacity>
      </View>

      <TextInput
        style={styles.searchInput}
        placeholder="Buscar assistência..."
        value={search}
        onChangeText={setSearch}
      />

      <MapView
        style={styles.map}
        initialRegion={{
          latitude: location.latitude,
          longitude: location.longitude,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        showsUserLocation
      >
        {filteredShops.map((shop) => (
          <Marker
            key={shop.id}
            coordinate={{
              latitude: shop.latitude,
              longitude: shop.longitude,
            }}
            title={shop.name}
            description={shop.services}
          />
        ))}
      </MapView>

      <Text style={styles.sectionTitle}>
        Assistências Disponíveis
      </Text>

      <FlatList
        data={filteredShops}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            style={styles.card}
            onPress={() =>
              navigation.navigate(
                'ShopDetails',
                {
                  shop: item,
                }
              )
            }
          >
            <Text style={styles.shopName}>
              {item.name}
            </Text>

            <Text style={styles.shopServices}>
              {item.services}
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  loadingText: {
    marginTop: 10,
    color: '#7F8C8D',
  },

  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',

    paddingTop: 60,
    paddingHorizontal: 20,
    paddingBottom: 15,
  },

  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#2C3E50',
  },

  logout: {
    color: '#E74C3C',
    fontWeight: 'bold',
  },

  searchInput: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginBottom: 15,

    borderRadius: 12,

    paddingHorizontal: 15,
    height: 50,
  },

  map: {
    height: 260,
    marginHorizontal: 20,
    borderRadius: 15,
  },

  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#2C3E50',

    marginTop: 20,
    marginHorizontal: 20,
    marginBottom: 10,
  },

  card: {
    backgroundColor: '#FFF',

    marginHorizontal: 20,
    marginBottom: 12,

    padding: 15,

    borderRadius: 12,

    elevation: 2,
  },

  shopName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#2C3E50',
  },

  shopServices: {
    marginTop: 5,
    color: '#7F8C8D',
  },
});