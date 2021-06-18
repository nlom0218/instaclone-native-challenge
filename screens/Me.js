import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { logUserOut } from '../apollo';

const Me = () => {
  return (<View style={{ backgroundColor: "black", flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ color: "white" }}>Me</Text>
    <TouchableOpacity onPress={logUserOut}>
      <Text style={{ color: "white" }}>
        Log out
      </Text>
    </TouchableOpacity>
  </View>);
}

export default Me;