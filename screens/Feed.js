import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { logUserOut } from '../apollo';

const Feed = () => {
  return (<View style={{ backgroundColor: "black", flex: 1, justifyContent: "center", alignItems: "center" }}>
    <Text style={{ color: "white" }}>Feed</Text>
  </View>);
}

export default Feed;