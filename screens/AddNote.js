import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
// Components
import Button from '../components/Button'
import HeaderText from '../components/HeaderText'
import NoteInputTitle from '../components/Notes/NoteInputTitle'
import NoteInputDescription from '../components/Notes/NoteInputDescription'
import CustomModal from '../components/CustomModal'
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
  const [modalVisible, setModalVisible] = useState(false)
  // Utils
  const goBack = () => {
    if (title?.length > 3 && description?.length > 3) {
      setModalVisible(!modalVisible)
    } else {
      navigation.goBack()
    }
  }
  const handlesaveChange = () => {
    setModalVisible(!modalVisible)
  }
  return (
    <>
      {/* <View
        style={{
          height: '100%',
          width: '100%',
          position: 'absolute',
          backgroundColor: 'red',
        }}
      ></View> */}
      <CustomModal
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
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
            <Button icon='save' size={32} onPress={handlesaveChange} />
          </View>
        </View>
        <NoteInputTitle title={title} setTitle={setTitle} />
        <NoteInputDescription
          description={description}
          setDescription={setDescription}
        />
      </View>
    </>
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
