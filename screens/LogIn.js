import { useMutation } from '@apollo/client';
import gql from 'graphql-tag';
import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRef } from 'react/cjs/react.development';
import { logUserIn } from '../apollo';
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

const LogIn = ({ route: { params } }) => {
  const { register, handleSubmit, setValue, watch } = useForm({
    defaultValues: {
      password: params?.password,
      username: params?.username
    }
  })
  const passwordRef = useRef()
  const onCompleted = async (data) => {
    const { login: { ok, token } } = data
    if (ok) {
      await logUserIn(token)
    }
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
        value={watch("username")}
        placeholder="Username"
        placeholderTextColor={"rgba(255,255,255,0.6)"}
        returnKeyType="next"
        onChangeText={(text) => setValue("username", text)}
        autoCapitalize="none"
        onSubmitEditing={() => onNext(passwordRef)}
      />
      <TextInput
        value={watch("password")}
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