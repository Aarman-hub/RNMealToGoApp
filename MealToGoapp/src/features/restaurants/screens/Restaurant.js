import { SafeAreaView, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SearchBar from '../../../compnents/SearchBar'
import RestaurantInfo from '../components/RestaurantInfo'
import styled from 'styled-components/native';


const SafeAria = styled(SafeAreaView)`
  flex:1;
  margin-top: ${StatusBar.currentHeight}px;
`;

const SearchContainer = styled.View`
  padding: 15px;
`;

const RestaurantListContainer = styled.View`
  padding:15px;
  background-color:white;
`;



const Restaurant = () => {
  return (
    <SafeAria>
        <SearchContainer>
            <SearchBar />
        </SearchContainer>
        <RestaurantListContainer>
            <RestaurantInfo />
        </RestaurantListContainer>
      </SafeAria>
  )
}

export default Restaurant

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop:StatusBar.currentHeight
      },
      search:{
        padding:15,
      },
      info:{
          padding:15,
      }
})