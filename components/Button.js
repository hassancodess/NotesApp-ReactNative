import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const Button = ({ icon, size, style }) => {
  return (
    <Pressable style={[styles.buttonContainer, style]}>
      <AntDesign name={icon} size={size} color='white' />
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 20,
    backgroundColor: '#3B3B3B',

    // backgroundColor: '#03001C',
    // back
    borderRadius: 18,
  },
})
