import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';

export default function TrackingScreen({ navigation }) {
  const currentStatus = 'Em reparo';

  const statuses = [
    'Solicitado',
    'Confirmado',
    'Em análise',
    'Em reparo',
    'Concluído',
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Acompanhamento
        </Text>

        <Text style={styles.subtitle}>
          Status atual do atendimento
        </Text>
      </View>

      <View style={styles.card}>
        {statuses.map((status, index) => {
          const active =
            statuses.indexOf(currentStatus) >= index;

          return (
            <View
              key={status}
              style={styles.statusRow}
            >
              <View
                style={[
                  styles.circle,
                  active && styles.activeCircle,
                ]}
              />

              <Text
                style={[
                  styles.statusText,
                  active && styles.activeText,
                ]}
              >
                {status}
              </Text>
            </View>
          );
        })}
      </View>

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>
          Serviço
        </Text>

        <Text style={styles.infoText}>
          Troca de Tela
        </Text>

        <Text style={styles.infoTitle}>
          Assistência
        </Text>

        <Text style={styles.infoText}>
          Conserta Smart
        </Text>

        <Text style={styles.infoTitle}>
          Status Atual
        </Text>

        <Text style={styles.currentStatus}>
          {currentStatus}
        </Text>
      </View>

      <TouchableOpacity
        style={styles.button}
        onPress={() =>
          navigation.navigate('Review')
        }
      >
        <Text style={styles.buttonText}>
          Avaliar Atendimento
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

  header: {
    backgroundColor: '#3498DB',
    paddingTop: 60,
    paddingBottom: 30,
    alignItems: 'center',
  },

  title: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  subtitle: {
    color: '#D6EAF8',
    marginTop: 5,
  },

  card: {
    backgroundColor: '#FFF',
    margin: 20,
    borderRadius: 15,
    padding: 20,
    elevation: 2,
  },

  statusRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 18,
  },

  circle: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: '#D5DBDB',
    marginRight: 12,
  },

  activeCircle: {
    backgroundColor: '#27AE60',
  },

  statusText: {
    fontSize: 16,
    color: '#7F8C8D',
  },

  activeText: {
    color: '#2C3E50',
    fontWeight: 'bold',
  },

  infoCard: {
    backgroundColor: '#FFF',
    marginHorizontal: 20,
    padding: 20,
    borderRadius: 15,
    elevation: 2,
  },

  infoTitle: {
    fontWeight: 'bold',
    color: '#2C3E50',
    marginTop: 10,
  },

  infoText: {
    color: '#7F8C8D',
    marginTop: 4,
  },

  currentStatus: {
    color: '#27AE60',
    fontWeight: 'bold',
    marginTop: 4,
  },

  button: {
    backgroundColor: '#E67E22',
    margin: 20,
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});