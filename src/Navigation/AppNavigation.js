import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import GetStarted from '../Screens/AuthStack/GetStarted';
import Login from '../Screens/AuthStack/Login';

const Stack = createNativeStackNavigator();
const AppNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation: 'slide_from_right'}}>
      <Stack.Screen name="AuthStack" component={AuthStack} />
    </Stack.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false, animation:'slide_from_right'}}>
      <Stack.Screen name="GetStarted" component={GetStarted} />
      <Stack.Screen name='Login' component={Login} />
    </Stack.Navigator>
  );
};

export default AppNavigation;
