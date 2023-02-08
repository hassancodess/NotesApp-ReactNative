import React, { useCallback } from 'react'
import { View } from 'react-native'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import * as SplashScreen from 'expo-splash-screen'
import MainNavigator from './navigator/MainNavigator'
// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync()

const App = () => {
  const [fontsLoaded] = useFonts({
    Light: require('./assets/fonts/Nunito-Light.ttf'),
    Regular: require('./assets/fonts/Nunito-Regular.ttf'),
    SemiBold: require('./assets/fonts/Nunito-SemiBold.ttf'),
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <>
      <StatusBar style='light' />
      <View onLayout={onLayoutRootView} style={{ flex: 1 }}>
        <MainNavigator />
      </View>
    </>
  )
}

export default App
