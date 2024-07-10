import { View, Text, LogBox, Platform, UIManager } from 'react-native'
import React, { useEffect } from 'react'
import SplashScreen from 'react-native-splash-screen'
import AppNavigation from './src/Navigation/AppNavigation'
import { NavigationContainer } from '@react-navigation/native'

LogBox.ignoreAllLogs()

if (Platform.OS === 'android') {
  if (UIManager.setLayoutAnimationEnabledExperimental) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
  }
}

const App = () => {
  useEffect (() => {
    setTimeout(() =>  {
      SplashScreen.hide()
    }, 2000)
  } )
  return (
   <NavigationContainer>
    <AppNavigation />
   </NavigationContainer>
  )
}

export default App