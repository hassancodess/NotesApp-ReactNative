import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import colors from '../../data/colors'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'

const Note = ({ note }) => {
  const rightSwipe = () => {
    return (
      <View
        style={{
          flex: 1,
          paddingVertical: 30,
          paddingHorizontal: 50,
          backgroundColor: '#FF0000',
          justifyContent: 'center',
          alignItems: 'center',
          overflow: 'hidden',
          marginBottom: 10,
          borderRadius: 20,
        }}
      >
        <MaterialIcons name='delete' size={80} color='white' />
      </View>
    )
  }
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={rightSwipe}>
        <View style={[styles.noteContainer(note.color)]}>
          <Text style={styles.noteTitle}>{note.title}</Text>
        </View>
      </Swipeable>
    </GestureHandlerRootView>
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
