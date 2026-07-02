import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Alert,
  ScrollView,
} from 'react-native';

export default function AppointmentScreen({ navigation }) {
  const [service, setService] = useState('');
  const [date, setDate] = useState('');
  const [hour, setHour] = useState('');

  const handleSchedule = () => {
    if (!service || !date || !hour) {
      Alert.alert(
        'Campos obrigatórios',
        'Preencha todos os campos.'
      );
      return;
    }

    Alert.alert(
      'Sucesso',
      'Solicitação enviada para o técnico!',
      [
        {
          text: 'OK',
          onPress: () =>
            navigation.navigate('Tracking'),
        },
      ]
    );
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          Agendar Atendimento
        </Text>

        <Text style={styles.subtitle}>
          Escolha o serviço e horário desejado
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.label}>
          Serviço
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: Troca de Tela"
          value={service}
          onChangeText={setService}
        />

        <Text style={styles.label}>
          Data
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: 20/06/2026"
          value={date}
          onChangeText={setDate}
        />

        <Text style={styles.label}>
          Horário
        </Text>

        <TextInput
          style={styles.input}
          placeholder="Ex: 14:00"
          value={hour}
          onChangeText={setHour}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleSchedule}
        >
          <Text style={styles.buttonText}>
            Solicitar Atendimento
          </Text>
        </TouchableOpacity>
      </View>
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
    padding: 20,
    borderRadius: 15,
    elevation: 3,
  },

  label: {
    fontWeight: 'bold',
    color: '#2C3E50',
    marginBottom: 5,
  },

  input: {
    backgroundColor: '#FAFAFA',
    borderWidth: 1,
    borderColor: '#E5E7EB',
    borderRadius: 10,
    paddingHorizontal: 15,
    height: 50,
    marginBottom: 15,
  },

  button: {
    backgroundColor: '#27AE60',
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});