import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// Components
import Button from '../components/Button'
import HeaderText from '../components/HeaderText'
import NotesList from '../components/Notes/NotesList'
import FAB from '../components/FAB'
// Data
import data from '../data/data'
// Navigation
import { useNavigation } from '@react-navigation/native'

const Home = () => {
  const navigation = useNavigation()
  const navigateToAddNoteScreen = () => {
    navigation.navigate('AddNote')
  }
  const navigateToSearchNoteScreen = () => {
    navigation.navigate('SearchNote')
  }
  return (
    <View style={styles.container}>
      {/* Section 1 */}
      <View style={styles.headerContainer}>
        <HeaderText text='Notes' />
        <View style={styles.headerButtonsContainer}>
          <Button
            icon='search1'
            size={32}
            style={{ marginRight: 20 }}
            onPress={navigateToSearchNoteScreen}
          />
          <Button icon='exclamationcircleo' size={32} />
        </View>
      </View>
      {/* Section 2 */}
      <View style={styles.notesContainer}>
        <NotesList notes={data} />
      </View>
      <FAB onPress={navigateToAddNoteScreen} />
    </View>
  )
}

export default Home

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
  notesContainer: {
    flex: 2,
    // backgroundColor: 'yellow',
  },
})
