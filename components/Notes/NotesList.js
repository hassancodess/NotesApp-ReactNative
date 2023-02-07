import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import Note from './Note'

const NotesList = ({ notes }) => {
  const showItem = ({ item }) => {
    return <Note note={item} />
  }
  return (
    <FlatList
      data={notes}
      keyExtractor={(item) => item.id}
      renderItem={showItem}
    />
  )
}

export default NotesList

const styles = StyleSheet.create({})
