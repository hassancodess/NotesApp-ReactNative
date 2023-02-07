import React from 'react'
import { StyleSheet, Text } from 'react-native'

const HeaderText = ({ text }) => {
  return <Text style={styles.headerText}>{text}</Text>
}

export default HeaderText

const styles = StyleSheet.create({
  headerText: {
    fontFamily: 'SemiBold',
    fontSize: 42,
    color: 'white',
  },
})
