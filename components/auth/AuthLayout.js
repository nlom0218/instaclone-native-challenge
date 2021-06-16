import React from 'react';
import { Keyboard, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import styled from 'styled-components/native';

const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: black;
  padding: 0px 40px;
`

const Logo = styled.Image`
  max-width: 50%;
  width: 100%;
  height: 100px;
  margin-bottom: 20px;
`

const AuthLayout = ({ children }) => {
  const dismissKeyboard = () => {
    Keyboard.dismiss()
  }
  return (
    <TouchableWithoutFeedback style={{ flex: 1 }}
      onPress={dismissKeyboard}
    >
      <Container>
        <Logo resizeMode="contain" source={require("../../assets/Instagram-Logo.png")} />
        {children}
      </Container>
    </TouchableWithoutFeedback>
  );
}

export default AuthLayout;