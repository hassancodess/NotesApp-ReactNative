import React, { useState } from 'react'
import { Modal, StyleSheet, Text, View } from 'react-native'
import { AntDesign } from '@expo/vector-icons'
const AboutModal = ({ showAboutModal, setShowAboutModal }) => {
  return (
    <Modal
      animationType='slide'
      transparent={true}
      visible={showAboutModal}
      onRequestClose={() => {
        setShowAboutModal(!showAboutModal)
      }}
    >
      <View style={styles.topView}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>Designed by - Divya Kelaskar</Text>
            <Text style={styles.modalText}>Icons - Expo Icons</Text>
            <Text style={styles.modalText}>Fonts - Nunito</Text>
            <Text style={[styles.modalText, { textAlign: 'center' }]}>
              Made with <AntDesign name='heart' size={14} color='red' /> by
              hassancodess
            </Text>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default AboutModal

const styles = StyleSheet.create({
  topView: {
    height: '100%',
    width: '100%',
    position: 'absolute',
    zIndex: 100,
    backgroundColor: 'rgba(196, 196, 196, 0.3)',
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: '#252525',
    borderRadius: 20,
    padding: 35,
    // alignItems: 'center',
    elevation: 5,
    width: '80%',
  },

  modalText: {
    fontFamily: 'Light',
    fontSize: 14,
    // textAlign: 'center',
    marginVertical: 5,
    color: 'white',
  },
})
