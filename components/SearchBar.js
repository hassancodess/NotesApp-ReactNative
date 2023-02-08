import React, { useState, useEffect } from 'react'
import { StyleSheet, View, Text, TextInput } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

const SearchBar = ({ searchValue, setSearchValue }) => {
  //   States
  const [showIcon, setShowIcon] = useState(false)
  //   Utils
  const clearSearchValue = () => {
    setSearchValue('')
  }
  useEffect(() => {
    if (searchValue.length > 0) {
      setShowIcon(true)
    } else {
      setShowIcon(false)
    }
  }, [searchValue])
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        value={searchValue}
        placeholder='Search by the keyword...'
        placeholderTextColor='white'
        onChangeText={(text) => setSearchValue(text)}
      />
      {showIcon && (
        <View style={styles.iconContainer}>
          <AntDesign
            name='close'
            size={26}
            color='white'
            onPress={clearSearchValue}
          />
        </View>
      )}
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    backgroundColor: 'gray',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 100,
    fontFamily: 'Regular',
    fontSize: 16,
  },
  iconContainer: {
    position: 'absolute',
    right: '3%',
  },
})
