import React, { useState } from 'react';
import {
View,
Text,
StyleSheet,
FlatList,
TouchableOpacity,
} from 'react-native';

export default function TechnicianAgendaScreen({ navigation }) {

const [appointments] = useState([

{
id:'1',
client:'Rafael Bianchini',
device:'iPhone 13',
service:'Troca de Tela',
status:'Em reparo',
forecast:'02/07/2026'
},

{
id:'2',
client:'Gabriel Souza',
device:'Moto G84',
service:'Troca de Bateria',
status:'Aguardando Peça',
forecast:'03/07/2026'
},

{
id:'3',
client:'Samuel Lima',
device:'Galaxy S23',
service:'Atualização de Software',
status:'Em análise',
forecast:'Hoje'
}

]);

function getColor(status){

switch(status){

case 'Em reparo':
return '#27AE60';

case 'Aguardando Peça':
return '#F39C12';

default:
return '#3498DB';

}

}

return(

<View style={styles.container}>

<Text style={styles.title}>
Minha Agenda
</Text>

<Text style={styles.subtitle}>
Serviços em andamento
</Text>

<FlatList

data={appointments}

keyExtractor={(item)=>item.id}

renderItem={({item})=>(

<TouchableOpacity

style={styles.card}

onPress={()=>navigation.navigate('TechnicianOrder',{

appointment:item

})}

>

<Text style={styles.client}>
👤 {item.client}
</Text>

<Text style={styles.info}>
📱 {item.device}
</Text>

<Text style={styles.info}>
🛠 {item.service}
</Text>

<Text
style={[
styles.status,
{color:getColor(item.status)}
]}
>
{item.status}
</Text>

<Text style={styles.forecast}>
Entrega: {item.forecast}
</Text>

</TouchableOpacity>

)}

/>

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
fontSize:28,
fontWeight:'bold',
color:'#2C3E50'
},

subtitle:{
color:'#7F8C8D',
marginBottom:20
},

card:{
backgroundColor:'#FFF',
padding:18,
borderRadius:15,
marginBottom:15,
elevation:3
},

client:{
fontWeight:'bold',
fontSize:17,
color:'#2C3E50'
},

info:{
marginTop:5,
color:'#555'
},

status:{
marginTop:12,
fontWeight:'bold'
},

forecast:{
marginTop:5,
color:'#7F8C8D'
}

});