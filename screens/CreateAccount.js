import React from 'react';
import { TextInput } from 'react-native';
import styled from 'styled-components/native';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';

const CreateAccount = () => {
  return (<AuthLayout>
    <TextInput
      style={{ backgroundColor: "white", width: "100%" }}
      placeholder="First Name"
      placeholderTextColor="gray"
      returnKeyType="next"
    />
    <TextInput
      style={{ backgroundColor: "white", width: "100%" }}
      placeholder="Last Name"
      placeholderTextColor="gray"
      returnKeyType="next"
    />
    <TextInput
      style={{ backgroundColor: "white", width: "100%" }}
      placeholder="Username"
      placeholderTextColor="gray"
      returnKeyType="next"
    />
    <TextInput
      style={{ backgroundColor: "white", width: "100%" }}
      placeholder="Email"
      placeholderTextColor="gray"
      keyboardType="email-address"
      returnKeyType="next"
    />
    <TextInput
      style={{ backgroundColor: "white", width: "100%" }}
      placeholder="Password"
      placeholderTextColor="gray"
      secureTextEntry
      returnKeyType="done"
    />
    <AuthButton text="Create Account" disabled={true} />
  </AuthLayout>);
}

export default CreateAccount;