import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { logUserOut } from '../apollo';

const Search = ({ navigation }) => {
  return (<View style={{ backgroundColor: "black", flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ color: "white" }}>Search</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Photo")}>
      <Text style={{ color: "white" }}>Photo</Text>
    </TouchableOpacity>
  </View>);
}

export default Search;