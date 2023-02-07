import React from 'react'
import { StyleSheet, FlatList, View, Text } from 'react-native'
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

const styles = StyleSheet.create({
  rowBack: {
    alignItems: 'center',
    // backgroundColor: 'red',
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingLeft: 15,
    overflow: 'hidden',
  },
  backRightBtn: {
    alignItems: 'center',
    bottom: 0,
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    width: 75,
  },
  backRightBtnRight: {
    backgroundColor: 'red',
    right: 0,
  },
  backTextWhite: {
    color: '#FFF',
  },
})
