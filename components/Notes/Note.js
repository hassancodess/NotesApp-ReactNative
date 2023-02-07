import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../data/colors'

const Note = ({ note }) => {
  return (
    <View style={[styles.noteContainer(note.color)]}>
      <Text style={styles.noteTitle}>{note.title}</Text>
    </View>
  )
}

export default Note

const styles = StyleSheet.create({
  noteContainer: (uniqueColor) => ({
    paddingVertical: 30,
    paddingHorizontal: 50,
    marginBottom: 10,
    borderRadius: 20,
    backgroundColor: colors[uniqueColor],
  }),
  noteTitle: {
    fontSize: 28,
    fontFamily: 'Regular',
  },
})
