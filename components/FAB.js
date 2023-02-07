import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const FAB = ({ onPress }) => {
  const onPressHandler = () => {
    onPress()
  }
  return (
    <Pressable
      activeOpacity={0.7}
      onPress={onPressHandler}
      style={styles.touchableOpacityStyle}
    >
      <AntDesign name='plus' size={40} color='white' />
    </Pressable>
  )
}

export default FAB

const styles = StyleSheet.create({
  touchableOpacityStyle: {
    position: 'absolute',
    width: 80,
    height: 80,
    borderRadius: 100,
    alignItems: 'center',
    justifyContent: 'center',
    right: 30,
    bottom: 30,
    backgroundColor: '#252525',
    elevation: 5,
  },
})
