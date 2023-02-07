import { StyleSheet, TextInput } from 'react-native'
import React from 'react'

const NoteInputDescription = ({ description, setDescription }) => {
  return (
    <TextInput
      value={description}
      onChangeText={(text) => setDescription(text)}
      style={styles.inputDescription}
      placeholder='Type something...'
      placeholderTextColor='#9A9A9A'
      multiline
    />
  )
}

export default NoteInputDescription

const styles = StyleSheet.create({
  inputDescription: {
    paddingVertical: 16,
    flex: 1,
    fontSize: 22,
    fontFamily: 'Light',
    color: 'white',
    textAlignVertical: 'top',
  },
})
