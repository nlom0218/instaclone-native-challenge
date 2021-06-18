import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { logUserOut } from '../apollo';

const Photo = ({ navigation }) => {
  return (<View style={{ backgroundColor: "black", flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ color: "white" }}>Photo</Text>
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Text style={{ color: "white" }}>Profile</Text>
    </TouchableOpacity>
  </View>);
}

export default Photo;