import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import { Searchbar } from 'react-native-paper'

const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState('')
  
  const onChangeSearch = query =>setSearchQuery(query);
  
  return (
    <Searchbar
        placeholder='Search'
        onChangeText={onChangeSearch}
        value={searchQuery}
    />
  )
}

export default SearchBar

const styles = StyleSheet.create({})