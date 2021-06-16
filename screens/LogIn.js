import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { TextInput } from '../components/auth/AuthShared';

const LogIn = ({ navigation }) => {
  return (<AuthLayout>
    <TextInput
      placeholder="Username"
      placeholderTextColor={"rgba(255,255,255,0.6)"}
      returnKeyType="next"
    />
    <TextInput
      placeholder="Password"
      placeholderTextColor={"rgba(255,255,255,0.6)"}
      secureTextEntry
      returnKeyType="done"
      lastOne={true}
    />
    <AuthButton disabled={true} text="Log in" />
  </AuthLayout>);
}

export default LogIn;