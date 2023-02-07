import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const NoteDescription = ({ description }) => {
  return <Text style={styles.noteDescription}>{description}</Text>
}

export default NoteDescription

const styles = StyleSheet.create({
  noteDescription: {
    fontSize: 20,
    fontFamily: 'Light',
    color: 'white',
  },
})
