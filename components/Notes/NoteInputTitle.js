import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const NoteInputTitle = ({ title, setTitle }) => {
  return (
    <TextInput
      value={title}
      onChangeText={(text) => setTitle(text)}
      style={styles.noteInputTitle}
      placeholder='Title'
      placeholderTextColor='#9A9A9A'
      multiline
      scrollEnabled
    />
  )
}

export default NoteInputTitle

const styles = StyleSheet.create({
  noteInputTitle: {
    paddingVertical: 16,
    fontSize: 32,
    fontFamily: 'Regular',
    color: 'white',
  },
})
