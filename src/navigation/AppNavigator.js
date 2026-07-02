import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ClientHome from '../screens/ClientHome';
import ShopHome from '../screens/ShopHome';
import ShopDetails from '../screens/ShopDetails';
import ChatScreen from '../screens/ChatScreen';
import AppointmentScreen from '../screens/AppointmentScreen';
import TrackingScreen from '../screens/TrackingScreen';
import ReviewScreen from '../screens/ReviewScreen';
import TechnicianAgendaScreen from '../screens/TechnicianAgendaScreen';
import TechnicianOrderScreen from '../screens/TechnicianOrderScreen';
import ServiceRegisterScreen from '../screens/ServiceRegisterScreen';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">

      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ClientHome"
        component={ClientHome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ShopHome"
        component={ShopHome}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="ShopDetails"
        component={ShopDetails}
        options={{ title: 'Detalhes da Assistência' }}
      />

      <Stack.Screen
        name="Chat"
        component={ChatScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Appointment"
        component={AppointmentScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Tracking"
        component={TrackingScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Review"
        component={ReviewScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="TechnicianAgenda"
        component={TechnicianAgendaScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="TechnicianOrder"
        component={TechnicianOrderScreen}
        options={{ headerShown: false }}
    />
    <Stack.Screen
       name="ServiceRegister"
       component={ServiceRegisterScreen}
       options={{
        title: 'Cadastrar Serviço'}}
    />

    </Stack.Navigator>
  );
}