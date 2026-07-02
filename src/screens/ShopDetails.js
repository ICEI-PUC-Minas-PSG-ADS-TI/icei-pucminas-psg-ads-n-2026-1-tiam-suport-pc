import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function ShopDetails({ route, navigation }) {
  const { shop } = route.params;

  return (
    <ScrollView style={styles.container}>
      {/* Banner */}
      <View style={styles.banner}>
        <Text style={styles.logo}>🔧📱</Text>
      </View>

      {/* Informações da assistência */}
      <View style={styles.card}>
        <Text style={styles.shopName}>
          {shop.name}
        </Text>

        <Text style={styles.description}>
          Assistência especializada em manutenção de smartphones,
          tablets e notebooks.
        </Text>

        <View style={styles.infoRow}>
          <Text style={styles.rating}>
            ⭐ 4.8 (126 avaliações)
          </Text>

          <Text style={styles.distance}>
            📍 220 metros de você
          </Text>
        </View>
      </View>

      {/* Serviços */}
      <View style={styles.detailsCard}>
        <Text style={styles.sectionTitle}>
          Localização
        </Text>

        <Text style={styles.infoText}>
          Próximo à sua localização atual.
        </Text>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>
          Serviços Oferecidos
        </Text>

        <View style={styles.tagsContainer}>

          <View style={styles.tag}>
            <Text style={styles.tagText}>
              Troca de Tela
            </Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>
              Troca de Bateria
            </Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>
              Conector de Carga
            </Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>
              Atualização de Software
            </Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>
              Troca de Carcaça
            </Text>
          </View>

          <View style={styles.tag}>
            <Text style={styles.tagText}>
              Aplicação de Película
            </Text>
          </View>

        </View>

        <View style={styles.divider} />

        <Text style={styles.sectionTitle}>
          Horário de Atendimento
        </Text>

        <Text style={styles.infoText}>
          Segunda a Sábado
        </Text>

        <Text style={styles.infoText}>
          08:00 às 18:00
        </Text>
      </View>

      {/* Botão */}
      <TouchableOpacity
        style={styles.chatButton}
        onPress={() => navigation.navigate('Chat')}
      >
        <Text style={styles.chatButtonText}>
          Solicitar Atendimento
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Text style={styles.backButtonText}>
          Voltar ao Mapa
        </Text>
      </TouchableOpacity>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  banner: {
    height: 150,
    backgroundColor: '#3498DB',
    justifyContent: 'center',
    alignItems: 'center',
  },

  logo: {
    fontSize: 55,
  },

  card: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    marginTop: -30,
    borderRadius: 15,
    padding: 20,
    elevation: 4,
  },

  shopName: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#2C3E50',
  },

  description: {
    marginTop: 8,
    color: '#7F8C8D',
    fontSize: 14,
    lineHeight: 20,
  },

  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 15,
  },

  rating: {
    color: '#F39C12',
    fontWeight: 'bold',
    fontSize: 14,
  },

  distance: {
    color: '#7F8C8D',
    fontSize: 14,
  },

  detailsCard: {
    backgroundColor: '#FFF',
    margin: 20,
    borderRadius: 15,
    padding: 20,
    elevation: 3,
  },

  sectionTitle: {
    fontSize: 17,
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 12,
  },

  infoText: {
    color: '#7F8C8D',
    fontSize: 15,
    lineHeight: 22,
  },

  divider: {
    height: 1,
    backgroundColor: '#ECECEC',
    marginVertical: 18,
  },

  tagsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },

  tag: {
    backgroundColor: '#EAF4FD',
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 15,
    marginRight: 8,
    marginBottom: 8,
  },

  tagText: {
    color: '#3498DB',
    fontSize: 13,
    fontWeight: '600',
  },

  chatButton: {
    backgroundColor: '#27AE60',
    marginHorizontal: 20,
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  chatButtonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 17,
  },

  backButton: {
    alignItems: 'center',
    marginVertical: 25,
  },

  backButtonText: {
    color: '#3498DB',
    fontWeight: '600',
    fontSize: 15,
  },

});