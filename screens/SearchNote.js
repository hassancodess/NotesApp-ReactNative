import React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import SearchBar from '../components/SearchBar'
import data from '../data/data'
import NotesList from '../components/Notes/NotesList'
// Images
import noNotes from '../assets/noNotes.png'
const SearchNote = () => {
  const [searchValue, setSearchValue] = useState('')
  const [filteredNotes, setFilteredNotes] = useState([])
  const [firstTime, setFirstTime] = useState(true)
  useEffect(() => {
    if (searchValue.length > 0) {
      setFirstTime(false)
      const filtered = data.filter((note) =>
        note.title.toLowerCase().includes(searchValue.toLowerCase())
      )
      setFilteredNotes(filtered)
    }
  }, [searchValue])
  return (
    <View style={styles.container}>
      {/* Section 1 */}
      <View style={styles.headerContainer}>
        <SearchBar searchValue={searchValue} setSearchValue={setSearchValue} />
      </View>
      {filteredNotes.length > 0 && <NotesList notes={filteredNotes} />}
      {/* No Notes Found */}
      {filteredNotes.length === 0 && !firstTime && (
        <View style={styles.imageContainer}>
          <Image source={noNotes} style={styles.image} />
          <Text style={styles.text}>No notes found! Try searching again.</Text>
        </View>
      )}
    </View>
  )
}

export default SearchNote

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
  imageContainer: {
    flex: 1,
    resizeMode: 'contain',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    width: '100%',
    height: '40%',
  },
  text: {
    color: 'white',
    fontFamily: 'Light',
    fontSize: 18,
  },
})
