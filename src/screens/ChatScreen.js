import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  FlatList,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';

export default function ChatScreen({ navigation }) {
  const [message, setMessage] = useState('');

  const [messages, setMessages] = useState([
    {
      id: '1',
      text: 'Olá! Como posso ajudar?',
      sender: 'shop',
    },
  ]);

  const sendMessage = () => {
    if (!message.trim()) return;

    setMessages([
      ...messages,
      {
        id: Date.now().toString(),
        text: message,
        sender: 'user',
      },
    ]);

    setMessage('');
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={
        Platform.OS === 'ios'
          ? 'padding'
          : undefined
      }
    >
      <View style={styles.header}>
        <Text style={styles.shopName}>
          Conserta Smart
        </Text>

        <Text style={styles.status}>
          Online
        </Text>
      </View>

      <FlatList
        data={messages}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesContainer}
        renderItem={({ item }) => (
          <View
            style={[
              styles.messageBubble,
              item.sender === 'user'
                ? styles.userBubble
                : styles.shopBubble,
            ]}
          >
            <Text
              style={[
                styles.messageText,
                item.sender === 'user'
                  ? styles.userText
                  : styles.shopText,
              ]}
            >
              {item.text}
            </Text>
          </View>
        )}
      />

      <View style={styles.footer}>
        <TouchableOpacity style={styles.imageButton}>
          <Text style={styles.imageIcon}>📷</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Digite sua mensagem..."
          value={message}
          onChangeText={setMessage}
        />

        <TouchableOpacity
          style={styles.sendButton}
          onPress={sendMessage}
        >
          <Text style={styles.sendText}>
            Enviar
          </Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.scheduleButton}
        onPress={() =>
          navigation.navigate('Appointment')
        }
      >
        <Text style={styles.scheduleText}>
          Agendar Atendimento
        </Text>
      </TouchableOpacity>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  header: {
    paddingTop: 60,
    paddingBottom: 15,
    backgroundColor: '#3498DB',
    alignItems: 'center',
  },

  shopName: {
    color: '#FFF',
    fontSize: 20,
    fontWeight: 'bold',
  },

  status: {
    color: '#DFF9FB',
    marginTop: 4,
  },

  messagesContainer: {
    padding: 15,
  },

  messageBubble: {
    maxWidth: '80%',
    padding: 12,
    borderRadius: 15,
    marginBottom: 10,
  },

  userBubble: {
    alignSelf: 'flex-end',
    backgroundColor: '#3498DB',
  },

  shopBubble: {
    alignSelf: 'flex-start',
    backgroundColor: '#FFFFFF',
  },

  messageText: {
    fontSize: 15,
  },

  userText: {
    color: '#FFF',
  },

  shopText: {
    color: '#2C3E50',
  },

  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },

  imageButton: {
    marginRight: 8,
  },

  imageIcon: {
    fontSize: 24,
  },

  input: {
    flex: 1,
    backgroundColor: '#FFF',
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 45,
  },

  sendButton: {
    marginLeft: 8,
    backgroundColor: '#3498DB',
    paddingHorizontal: 15,
    height: 45,
    borderRadius: 10,
    justifyContent: 'center',
  },

  sendText: {
    color: '#FFF',
    fontWeight: 'bold',
  },

  scheduleButton: {
    backgroundColor: '#27AE60',
    margin: 15,
    height: 55,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },

  scheduleText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },
});