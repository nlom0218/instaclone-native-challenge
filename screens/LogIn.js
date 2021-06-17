import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRef } from 'react/cjs/react.development';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { TextInput } from '../components/auth/AuthShared';

const LOGIN_MUTATION = gql`
  mutation login($username: String!, $password: String!) {
    login(username: $username, password: $password) {
      ok
      error
      token
    }
  }
`

const LogIn = ({ navigation }) => {
  const { register, handleSubmit, setValue, watch } = useForm()
  const passwordRef = useRef()
  const onCompleted = (data) => {
    console.log(data);
  }
  const [loginMutation, { loading }] = useMutation(LOGIN_MUTATION, {
    onCompleted
  })
  const onNext = (nextOne) => {
    nextOne?.current?.focus()
  }
  const onValid = (data) => {
    if (!loading) {
      loginMutation({
        variables: { ...data }
      })
    }
  }
  useEffect(() => {
    register("username", {
      required: true
    })
    register("password", {
      required: true
    })
  }, [register])

  return (
    <AuthLayout>
      <TextInput
        placeholder="Username"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        returnKeyType="next"
        onChangeText={(text) => setValue("username", text)}
        autoCapitalize="none"
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <TextInput
        ref={passwordRef}
        placeholder="Password"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        secureTextEntry
        returnKeyType="done"
        lastOne={true}
        onChangeText={(text) => setValue("password", text)}
        onSubmitEditing={handleSubmit(onValid)}
      />
      <AuthButton
        loading={loading}
        text="Log in"
        onPress={handleSubmit(onValid)}
        disabled={!watch("username") || !watch("password")}
      />
    </AuthLayout>);
}

export default LogIn;