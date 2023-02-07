import React from 'react'
import { StyleSheet, Text, View, Pressable } from 'react-native'
import colors from '../../data/colors'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler'
import { MaterialIcons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'

const Note = ({ note }) => {
  const navigation = useNavigation()
  const navigateToNoteScreen = () => {
    navigation.navigate('ViewNote', {
      item: note,
    })
  }
  const rightSwipe = () => {
    return (
      <View style={styles.rightSwipe}>
        <MaterialIcons name='delete' size={80} color='white' />
      </View>
    )
  }
  return (
    <GestureHandlerRootView>
      <Swipeable renderRightActions={rightSwipe}>
        <Pressable
          style={[styles.noteContainer(note.color)]}
          onPress={navigateToNoteScreen}
        >
          <Text style={styles.noteTitle}>{note.title}</Text>
        </Pressable>
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
  rightSwipe: {
    flex: 1,
    paddingVertical: 30,
    paddingHorizontal: 50,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 10,
    borderRadius: 20,
  },
})
