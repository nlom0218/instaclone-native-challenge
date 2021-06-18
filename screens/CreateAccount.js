import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useForm } from 'react-hook-form';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { TextInput } from '../components/auth/AuthShared';

const CREATE_ACCOUNT = gql`
  mutation createAccount(
    $firstName: String!
    $lastName: String
    $username: String!
    $email: String!
    $password: String!
  ) {
    createAccount(
      firstName: $firstName
      lastName: $lastName
      username: $username
      email: $email
      password: $password
    ) {
      ok
      error
    }
  }
`

const CreateAccount = ({ navigation }) => {
  const { register, handleSubmit, setValue, getValues, watch } = useForm()
  const onCompleted = (data) => {
    const { createAccount: { ok } } = data
    const { username, password } = getValues()
    if (ok) {
      navigation.navigate("LogIn", {
        username,
        password
      })
    }
  }
  const [createAccount, { loading }] = useMutation(CREATE_ACCOUNT, {
    onCompleted
  })
  const lastNameRef = useRef()
  const usernameRef = useRef()
  const emailRef = useRef()
  const passwordRef = useRef()
  const onNext = (nextOne) => {
    nextOne?.current?.focus()
  }
  const onValid = (data) => {
    if (!loading) {
      createAccount({
        variables: { ...data }
      })
    }
  }
  useEffect(() => {
    register("firstName", {
      required: true
    })
    register("lastName")
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
    <AuthButton text="Create Account"
      disabled={!watch("firstName") || !watch("username") || !watch("email") || !watch("password")}
      onPress={handleSubmit(onValid)} loading={loading} />
  </AuthLayout>);
}

export default CreateAccount;