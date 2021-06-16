import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';

const LogIn = ({ navigation }) => {
  return (<View>
    <Text>LogIn</Text>
    <TouchableOpacity onPress={() => navigation.navigate("CreateAccount")}>
      <View>
        <Text>go CreateAccount</Text>
      </View>
    </TouchableOpacity>
  </View>);
}

export default LogIn;