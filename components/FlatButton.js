import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'

const FlatButton = ({ title, onPress, color }) => {
  return (
    <Pressable style={[styles.buttonContainer(color)]} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </Pressable>
  )
}

export default FlatButton

const styles = StyleSheet.create({
  buttonContainer: (color) => ({
    paddingVertical: 15,
    paddingHorizontal: 40,
    backgroundColor: color,
    borderRadius: 10,
  }),
  buttonText: {
    fontFamily: 'Regular',
    color: 'white',
    fontSize: 20,
  },
})
