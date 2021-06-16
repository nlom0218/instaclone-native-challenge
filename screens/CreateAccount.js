import React from 'react';
import { useRef } from 'react';
import styled from 'styled-components/native';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { TextInput } from '../components/auth/AuthShared';

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
    <TextInput
      placeholder="First Name"
      placeholderTextColor={"rgba(255,255,255,0.6)"}
      returnKeyType="next"
      onSubmitEditing={() => onNext(lastNameRef)}
    />
    <TextInput
      placeholder="Last Name"
      placeholderTextColor={"rgba(255,255,255,0.6)"}
      returnKeyType="next"
      ref={lastNameRef}
      onSubmitEditing={() => onNext(usernameRef)}
    />
    <TextInput
      placeholder="Username"
      placeholderTextColor={"rgba(255,255,255,0.6)"}
      returnKeyType="next"
      ref={usernameRef}
      onSubmitEditing={() => onNext(emailRef)}
    />
    <TextInput
      placeholder="Email"
      placeholderTextColor={"rgba(255,255,255,0.6)"}
      keyboardType="email-address"
      returnKeyType="next"
      ref={emailRef}
      onSubmitEditing={() => onNext(passwordRef)}
    />
    <TextInput
      placeholder="Password"
      placeholderTextColor={"rgba(255,255,255,0.6)"}
      secureTextEntry
      returnKeyType="done"
      ref={passwordRef}
      lastOne={true}
      onSubmitEditing={onDone}
    />
    <AuthButton text="Create Account" disabled={true} />
  </AuthLayout>);
}

export default CreateAccount;