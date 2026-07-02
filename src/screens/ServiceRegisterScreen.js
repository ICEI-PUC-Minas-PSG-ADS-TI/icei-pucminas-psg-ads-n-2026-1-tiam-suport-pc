import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  ScrollView,
  Alert,
  ActivityIndicator
} from "react-native";

import FirebaseService from "../firebase/firebaseService";

export default function ServiceRegisterScreen({ navigation }) {

  const [nome, setNome] = useState("");
  const [categoria, setCategoria] = useState("");
  const [descricao, setDescricao] = useState("");
  const [valor, setValor] = useState("");
  const [tempo, setTempo] = useState("");
  const [garantia, setGarantia] = useState("");

  const [loading, setLoading] = useState(false);

  async function salvarServico() {

    if (
      !nome ||
      !categoria ||
      !descricao ||
      !valor ||
      !tempo ||
      !garantia
    ) {
      Alert.alert(
        "Atenção",
        "Preencha todos os campos."
      );
      return;
    }

    try {

      setLoading(true);

      await FirebaseService.cadastrarServico({

        nome,
        categoria,
        descricao,
        valor: Number(valor),
        tempo,
        garantia

      });

      Alert.alert(
        "Sucesso",
        "Serviço cadastrado com sucesso!"
      );

      setNome("");
      setCategoria("");
      setDescricao("");
      setValor("");
      setTempo("");
      setGarantia("");

    } catch (error) {

      console.log(error);

      Alert.alert(
        "Erro",
        error.message
      );

    } finally {

      setLoading(false);

    }

  }

  return (

    <SafeAreaView style={styles.container}>

      <ScrollView
        contentContainerStyle={styles.content}
        showsVerticalScrollIndicator={false}
      >

        <Text style={styles.title}>
          Novo Serviço
        </Text>

        <Text style={styles.subtitle}>
          Cadastre um serviço oferecido pela assistência técnica.
        </Text>

        <View style={styles.card}>

          <Text style={styles.label}>
            Nome do Serviço
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: Troca de Tela"
            value={nome}
            onChangeText={setNome}
          />

          <Text style={styles.label}>
            Categoria
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: Tela, Bateria, Software..."
            value={categoria}
            onChangeText={setCategoria}
          />

          <Text style={styles.label}>
            Descrição
          </Text>

          <TextInput
            style={styles.textArea}
            placeholder="Descreva o serviço..."
            multiline
            value={descricao}
            onChangeText={setDescricao}
          />

          <Text style={styles.label}>
            Valor (R$)
          </Text>

          <TextInput
            style={styles.input}
            placeholder="250"
            keyboardType="numeric"
            value={valor}
            onChangeText={setValor}
          />

          <Text style={styles.label}>
            Tempo Estimado
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: 2 dias"
            value={tempo}
            onChangeText={setTempo}
          />

          <Text style={styles.label}>
            Garantia
          </Text>

          <TextInput
            style={styles.input}
            placeholder="Ex: 90 dias"
            value={garantia}
            onChangeText={setGarantia}
          />

          <TouchableOpacity
            style={styles.button}
            onPress={salvarServico}
            disabled={loading}
          >

            {
              loading ?

              <ActivityIndicator color="#FFF"/>

              :

              <Text style={styles.buttonText}>
                Salvar Serviço
              </Text>

            }

          </TouchableOpacity>

        </View>

      </ScrollView>

    </SafeAreaView>

  );

}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#F5F5F5"
  },

  content:{
    padding:20,
    paddingTop:40
  },

  title:{
    fontSize:28,
    fontWeight:"bold",
    color:"#2C3E50"
  },

  subtitle:{
    color:"#7F8C8D",
    marginTop:5,
    marginBottom:25
  },

  card:{
    backgroundColor:"#FFF",
    borderRadius:18,
    padding:20,
    elevation:3
  },

  label:{
    fontWeight:"bold",
    color:"#2C3E50",
    marginBottom:8,
    marginTop:12
  },

  input:{
    borderWidth:1,
    borderColor:"#DDD",
    borderRadius:12,
    paddingHorizontal:15,
    height:50,
    backgroundColor:"#FAFAFA"
  },

  textArea:{
    borderWidth:1,
    borderColor:"#DDD",
    borderRadius:12,
    backgroundColor:"#FAFAFA",
    height:120,
    padding:15,
    textAlignVertical:"top"
  },

  button:{
    marginTop:30,
    backgroundColor:"#27AE60",
    height:55,
    borderRadius:15,
    justifyContent:"center",
    alignItems:"center"
  },

  buttonText:{
    color:"#FFF",
    fontSize:17,
    fontWeight:"bold"
  }

});
