import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { logUserOut } from '../apollo';

const Profile = () => {
  return (<View style={{ backgroundColor: "black", flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ color: "white" }}>Someone Profile</Text>
  </View>);
}

export default Profile;