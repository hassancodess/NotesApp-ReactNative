import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Note = ({ note }) => {
  return (
    <View>
      <Text>{note.id}</Text>
      <Text>{note.title}</Text>
    </View>
  )
}

export default Note

const styles = StyleSheet.create({})
