import React, { useState } from 'react'
import { Alert, Modal, StyleSheet, Text, Pressable, View } from 'react-native'
import FlatButton from './FlatButton'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'
const CustomModal = ({ modalVisible, setModalVisible }) => {
  const navigation = useNavigation()
  const handleDiscard = () => {
    console.log('Discard')
    setModalVisible(!modalVisible)
    navigation.goBack()
  }
  const handleSave = () => {
    console.log('Save')
    setModalVisible(!modalVisible)
    navigation.goBack()
  }
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <Feather name='info' size={40} color='white' />
          <Text style={styles.modalText}>Save Changes ?</Text>
          <View style={styles.buttonsContainer}>
            <FlatButton
              title='Discard'
              onPress={handleDiscard}
              color='#FF0000'
            />
            <FlatButton title='Save' onPress={handleSave} color='#30BE71' />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default CustomModal

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
    backgroundColor: 'rgba(196, 196, 196, 0.1)',
  },
  modalView: {
    margin: 20,
    backgroundColor: '#252525',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    elevation: 5,
    width: '80%',
  },
  buttonsContainer: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-around',
    // alignItems: 'flex-start',
  },

  modalText: {
    fontFamily: 'SemiBold',
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 35,
    color: 'white',
  },
})
