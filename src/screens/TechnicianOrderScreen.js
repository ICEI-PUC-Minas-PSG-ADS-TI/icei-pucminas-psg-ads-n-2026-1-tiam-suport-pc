import React,{useState} from 'react';

import{
View,
Text,
StyleSheet,
TouchableOpacity,
Alert
}from 'react-native';

export default function TechnicianOrderScreen({route}){

const {appointment}=route.params;

const [status,setStatus]=useState(appointment.status);

function update(newStatus){

setStatus(newStatus);

Alert.alert(
'Status atualizado',
'O cliente será informado.'
);

}

return(

<View style={styles.container}>

<Text style={styles.title}>
Detalhes do Atendimento
</Text>

<View style={styles.card}>

<Text style={styles.label}>
Cliente
</Text>

<Text style={styles.value}>
{appointment.client}
</Text>

<Text style={styles.label}>
Aparelho
</Text>

<Text style={styles.value}>
{appointment.device}
</Text>

<Text style={styles.label}>
Serviço
</Text>

<Text style={styles.value}>
{appointment.service}
</Text>

<Text style={styles.label}>
Previsão
</Text>

<Text style={styles.value}>
{appointment.forecast}
</Text>

<Text style={styles.label}>
Status Atual
</Text>

<Text style={styles.status}>
{status}
</Text>

</View>

<TouchableOpacity
style={styles.buttonBlue}
onPress={()=>update('Em análise')}
>
<Text style={styles.buttonText}>
Em análise
</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.buttonOrange}
onPress={()=>update('Aguardando Peça')}
>
<Text style={styles.buttonText}>
Aguardando Peça
</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.buttonGreen}
onPress={()=>update('Concluído')}
>
<Text style={styles.buttonText}>
Concluir Serviço
</Text>
</TouchableOpacity>

</View>

)

}

const styles=StyleSheet.create({

container:{
flex:1,
backgroundColor:'#F5F5F5',
padding:20
},

title:{
marginTop:45,
fontSize:26,
fontWeight:'bold',
marginBottom:20,
color:'#2C3E50'
},

card:{
backgroundColor:'#FFF',
padding:20,
borderRadius:15,
elevation:2,
marginBottom:30
},

label:{
marginTop:15,
fontWeight:'bold',
color:'#2C3E50'
},

value:{
marginTop:5,
color:'#555'
},

status:{
marginTop:5,
fontWeight:'bold',
fontSize:18,
color:'#27AE60'
},

buttonBlue:{
backgroundColor:'#3498DB',
padding:15,
borderRadius:12,
marginBottom:12
},

buttonOrange:{
backgroundColor:'#F39C12',
padding:15,
borderRadius:12,
marginBottom:12
},

buttonGreen:{
backgroundColor:'#27AE60',
padding:15,
borderRadius:12
},

buttonText:{
color:'#FFF',
textAlign:'center',
fontWeight:'bold'
}

});