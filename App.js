import { View, Text } from 'react-native'
import React from 'react'
import SplashScreen from 'react-native-splash-screen'
import AppNavigation from './src/Navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'

const App = () => {
  return (
   <NavigationContainer>
    <AppNavigation />
   </NavigationContainer>
  )
}

export default App