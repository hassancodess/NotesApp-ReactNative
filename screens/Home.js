import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
// Components
import Button from '../components/Button'
import HeaderText from '../components/HeaderText'
import NotesList from '../components/Notes/NotesList'
// Data
import data from '../data/data'

const Home = () => {
  return (
    <View style={styles.container}>
      {/* Section 1 */}
      <View style={styles.headerContainer}>
        <HeaderText text='Notes' />
        <View style={styles.headerButtonsContainer}>
          <Button icon='search1' size={32} style={{ marginRight: 20 }} />
          <Button icon='exclamationcircleo' size={32} />
        </View>
      </View>
      {/* Section 2 */}
      <View style={styles.notesContainer}>
        <NotesList notes={data} />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    paddingTop: 50,
    paddingBottom: 20,
    paddingHorizontal: 20,
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
    backgroundColor: 'yellow',
  },
})
