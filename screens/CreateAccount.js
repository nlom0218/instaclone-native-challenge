import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components/native';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { TextInput } from '../components/auth/AuthShared';

const CreateAccount = () => {
  const { register, handleSubmit, setValue } = useForm()
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
  const onValid = (data) => {
    console.log(data);
  }
  useEffect(() => {
    register("firstName", {
      required: true
    })
    register("lastName", {
      required: true
    })
    register("username", {
      required: true
    })
    register("email", {
      required: true
    })
    register("password", {
      required: true
    })
  }, [register])
  return (<AuthLayout>
    <TextInput
      placeholder="First Name"
      placeholderTextColor={"rgba(255,255,255,0.6)"}
      returnKeyType="next"
      onSubmitEditing={() => onNext(lastNameRef)}
      onChangeText={(text) => setValue("firstName", text)}
    />
    <TextInput
      placeholder="Last Name"
      placeholderTextColor={"rgba(255,255,255,0.6)"}
      returnKeyType="next"
      ref={lastNameRef}
      onSubmitEditing={() => onNext(usernameRef)}
      onChangeText={(text) => setValue("lastName", text)}
    />
    <TextInput
      placeholder="Username"
      placeholderTextColor={"rgba(255,255,255,0.6)"}
      returnKeyType="next"
      ref={usernameRef}
      onSubmitEditing={() => onNext(emailRef)}
      autoCapitalize="none"
      onChangeText={(text) => setValue("username", text)}
    />
    <TextInput
      placeholder="Email"
      placeholderTextColor={"rgba(255,255,255,0.6)"}
      keyboardType="email-address"
      returnKeyType="next"
      ref={emailRef}
      onSubmitEditing={() => onNext(passwordRef)}
      onChangeText={(text) => setValue("email", text)}
    />
    <TextInput
      placeholder="Password"
      placeholderTextColor={"rgba(255,255,255,0.6)"}
      secureTextEntry
      returnKeyType="done"
      ref={passwordRef}
      lastOne={true}
      onSubmitEditing={handleSubmit(onValid)}
      onChangeText={(text) => setValue("password", text)}
    />
    <AuthButton text="Create Account" disabled={false} onPress={handleSubmit(onValid)} />
  </AuthLayout>);
}

export default CreateAccount;