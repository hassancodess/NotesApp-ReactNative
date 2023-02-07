import { StyleSheet, Text } from 'react-native'
import React from 'react'

const NoteTitle = ({ title }) => {
  return <Text style={styles.noteTitle}>{title}</Text>
}

export default NoteTitle

const styles = StyleSheet.create({
  noteTitle: {
    fontSize: 40,
    fontFamily: 'Regular',
    color: 'white',
    marginBottom: 25,
  },
})
