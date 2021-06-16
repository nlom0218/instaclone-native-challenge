import React from 'react';
import { TouchableOpacity } from 'react-native';
import styled from 'styled-components/native';
import { colors } from '../colors';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';

const CreateAccount = styled.TouchableOpacity`
  background-color: ${colors.blue};
  padding: 10px 10px;
  border-radius: 5px;
  width: 100%;
  opacity: ${props => props.disabled ? "0.5" : "1"};
`

const CreateAccountText = styled.Text`
  color: white;
  font-weight: 600;
  text-align: center;
`

const LoginLink = styled.Text`
  color: ${colors.blue};
  font-weight: 600;
  margin-top: 20px;
`

const Welcome = ({ navigation }) => {
  const goToCreateAccount = () => navigation.navigate("CreateAccount")
  const goToLogIn = () => navigation.navigate("LogIn")
  return (<AuthLayout>
    <AuthButton onPress={goToCreateAccount} disabled={false} text="Create New Account" />
    <TouchableOpacity onPress={goToLogIn}>
      <LoginLink>Log in</LoginLink>
    </TouchableOpacity>
  </AuthLayout>);
}

export default Welcome;