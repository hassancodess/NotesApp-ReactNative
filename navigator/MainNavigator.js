import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
// Screens
import Home from '../screens/Home'
import AddNote from '../screens/AddNote'
import ViewNote from '../screens/ViewNote'
import SearchNote from '../screens/SearchNote'
// Navigator
const Stack = createNativeStackNavigator()

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Notes'
        screenOptions={{
          headerShown: false,
          contentStyle: { backgroundColor: '#252525' },
        }}
      >
        <Stack.Screen name='Notes' component={Home} />
        <Stack.Screen name='ViewNote' component={ViewNote} />
        <Stack.Screen name='AddNote' component={AddNote} />
        <Stack.Screen name='SearchNote' component={SearchNote} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default MainNavigator
