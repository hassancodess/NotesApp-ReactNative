import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { useNavigation, useRoute } from '@react-navigation/native'
import Button from '../components/Button'
import NoteTitle from '../components/Notes/NoteTitle'
import NoteDescription from '../components/Notes/NoteDescription'
const ViewNote = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const { item } = route.params

  const goBack = () => {
    navigation.goBack()
  }
  const editNote = () => {
    navigation.navigate('AddNote', {
      editTitle: item.title,
      editDescription: item.description,
    })
  }
  return (
    <View style={styles.container}>
      {/* Section 1 */}
      <View style={styles.headerContainer}>
        <Button
          icon='arrowleft'
          size={32}
          style={{ marginRight: 20 }}
          onPress={goBack}
        />
        <Button icon='edit' size={32} onPress={editNote} />
      </View>
      <NoteTitle title={item.title} />
      <NoteDescription description={item.description} />
    </View>
  )
}

export default ViewNote

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 25,
    // backgroundColor: 'red',
    flex: 1,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
    // backgroundColor: 'green',
  },
  headerButtonsContainer: {
    flexDirection: 'row',
  },
})
