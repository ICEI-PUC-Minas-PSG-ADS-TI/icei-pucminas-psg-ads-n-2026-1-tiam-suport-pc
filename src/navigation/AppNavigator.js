// Arquivo: src/navigation/AppNavigator.js
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ShopDetails from '../screens/ShopDetails';

import LoginScreen from '../screens/LoginScreen';
import RegisterScreen from '../screens/RegisterScreen';
import ClientHome from '../screens/ClientHome';
import ShopHome from '../screens/ShopHome';

const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen 
        name="Login" 
        component={LoginScreen} 
        options={{ headerShown: false }} 
      />
      
      <Stack.Screen name="Register" component={RegisterScreen} />
      <Stack.Screen name="ClientHome" component={ClientHome} />
      <Stack.Screen name="ShopHome" component={ShopHome} />
      <Stack.Screen name="ShopDetails" component={ShopDetails} options={{ title: 'Detalhes da Loja' }} />
      
    </Stack.Navigator>
  );
}