import React, { useCallback } from 'react'
import { useFonts } from 'expo-font'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import * as SplashScreen from 'expo-splash-screen'

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
      <StatusBar style='dark' />
      <View onLayout={onLayoutRootView}>
        <Text style={styles.text}>App</Text>
      </View>
    </>
  )
}

export default App

const styles = StyleSheet.create({
  text: {
    margin: 102,
    fontSize: 50,
    fontFamily: 'Light',
  },
})
