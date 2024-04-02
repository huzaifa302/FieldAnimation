import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../Screens/AuthStack/GetStarted';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_left'}}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_left'}}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
