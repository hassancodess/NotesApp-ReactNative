import React, { useState } from 'react'
import { StyleSheet, Text, View, TextInput } from 'react-native'
// Components
import Button from '../components/Button'
import HeaderText from '../components/HeaderText'
import NoteInputTitle from '../components/Notes/NoteInputTitle'
import NoteInputDescription from '../components/Notes/NoteInputDescription'
// Navigation
import { useNavigation, useRoute } from '@react-navigation/native'
const AddNote = () => {
  // Navigation
  const navigation = useNavigation()
  const route = useRoute()
  const { editTitle, editDescription } = route.params ?? {}
  // States
  const [title, setTitle] = useState(editTitle ? editTitle : null)
  const [description, setDescription] = useState(
    editDescription ? editDescription : null
  )
  // Utils
  const goBack = () => {
    navigation.goBack()
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
        <View style={styles.headerButtonsContainer}>
          <Button icon='eye' size={32} style={{ marginRight: 20 }} />
          <Button icon='save' size={32} />
        </View>
      </View>
      <NoteInputTitle title={title} setTitle={setTitle} />
      <NoteInputDescription
        description={description}
        setDescription={setDescription}
      />
    </View>
  )
}

export default AddNote

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
