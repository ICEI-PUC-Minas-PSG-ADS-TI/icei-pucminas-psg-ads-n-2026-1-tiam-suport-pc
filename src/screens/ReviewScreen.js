import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ScrollView,
  Alert,
} from 'react-native';

export default function ReviewScreen({ navigation }) {
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState('');

  const handleFinish = () => {
    if (rating === 0) {
      Alert.alert(
        'Avaliação',
        'Selecione uma quantidade de estrelas.'
      );
      return;
    }

   Alert.alert(
  'Obrigado!',
  'Sua avaliação foi enviada com sucesso.',
  [
    {
      text: 'OK',
      onPress: () => navigation.navigate('ClientHome'),
    },
  ]
  );
  };

  return (
    <ScrollView style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>
          Avaliar Atendimento
        </Text>

        <Text style={styles.subtitle}>
          Conte como foi sua experiência
        </Text>
      </View>

      <View style={styles.card}>

        <Text style={styles.label}>
          Sua avaliação
        </Text>

        <View style={styles.stars}>

          {[1,2,3,4,5].map((item)=>(
            <TouchableOpacity
              key={item}
              onPress={()=>setRating(item)}
            >
              <Text
                style={[
                  styles.star,
                  rating >= item && styles.starSelected
                ]}
              >
                ★
              </Text>
            </TouchableOpacity>
          ))}

        </View>

        <Text style={styles.label}>
          Comentário
        </Text>

        <TextInput
          style={styles.input}
          multiline
          numberOfLines={5}
          placeholder="Conte como foi seu atendimento..."
          value={comment}
          onChangeText={setComment}
        />

        <TouchableOpacity
          style={styles.button}
          onPress={handleFinish}
        >
          <Text style={styles.buttonText}>
            Enviar Avaliação
          </Text>
        </TouchableOpacity>

      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:'#F5F5F5'
  },

  header:{
    backgroundColor:'#3498DB',
    paddingTop:60,
    paddingBottom:30,
    alignItems:'center'
  },

  title:{
    color:'#FFF',
    fontSize:24,
    fontWeight:'bold'
  },

  subtitle:{
    color:'#D6EAF8',
    marginTop:5
  },

  card:{
    backgroundColor:'#FFF',
    margin:20,
    borderRadius:15,
    padding:20,
    elevation:3
  },

  label:{
    fontSize:16,
    fontWeight:'bold',
    color:'#2C3E50',
    marginBottom:12
  },

  stars:{
    flexDirection:'row',
    justifyContent:'center',
    marginBottom:30
  },

  star:{
    fontSize:42,
    color:'#D5DBDB',
    marginHorizontal:6
  },

  starSelected:{
    color:'#F1C40F'
  },

  input:{
    borderWidth:1,
    borderColor:'#E5E7EB',
    borderRadius:12,
    padding:15,
    height:120,
    textAlignVertical:'top',
    backgroundColor:'#FAFAFA'
  },

  button:{
    marginTop:25,
    backgroundColor:'#27AE60',
    height:55,
    borderRadius:12,
    justifyContent:'center',
    alignItems:'center'
  },

  buttonText:{
    color:'#FFF',
    fontWeight:'bold',
    fontSize:16
  }

});