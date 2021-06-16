import React from 'react';
import { useRef } from 'react';
import { KeyboardAvoidingView, Platform, TextInput } from 'react-native';
import styled from 'styled-components/native';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';

const CreateAccount = () => {
  const lastNameRef = useRef()
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const onNext = (nextOne) => {
    nextOne?.current?.focus()
  }
  const onDone = () => {
    alert("onDone")
  }
  return (<AuthLayout>
    <KeyboardAvoidingView
      style={{
        width: "100%",
      }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      keyboardVerticalOffset={Platform.OS === "ios" ? "50" : "0"}
    >
      <TextInput
        style={{ backgroundColor: "white", width: "100%" }}
        placeholder="First Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        onSubmitEditing={() => onNext(lastNameRef)}
      />
      <TextInput
        style={{ backgroundColor: "white", width: "100%" }}
        placeholder="Last Name"
        placeholderTextColor="gray"
        returnKeyType="next"
        ref={lastNameRef}
        onSubmitEditing={() => onNext(usernameRef)}
      />
      <TextInput
        style={{ backgroundColor: "white", width: "100%" }}
        placeholder="Username"
        placeholderTextColor="gray"
        returnKeyType="next"
        ref={usernameRef}
        onSubmitEditing={() => onNext(emailRef)}
      />
      <TextInput
        style={{ backgroundColor: "white", width: "100%" }}
        placeholder="Email"
        placeholderTextColor="gray"
        keyboardType="email-address"
        returnKeyType="next"
        ref={emailRef}
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <TextInput
        style={{ backgroundColor: "white", width: "100%" }}
        placeholder="Password"
        placeholderTextColor="gray"
        secureTextEntry
        returnKeyType="done"
        ref={passwordRef}
        onSubmitEditing={onDone}
      />
      <AuthButton text="Create Account" disabled={true} />
    </KeyboardAvoidingView>
  </AuthLayout>);
}

export default CreateAccount;