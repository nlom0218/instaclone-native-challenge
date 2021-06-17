import React from 'react';
import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { useRef } from 'react/cjs/react.development';
import AuthButton from '../components/auth/AuthButton';
import AuthLayout from '../components/auth/AuthLayout';
import { TextInput } from '../components/auth/AuthShared';

const LogIn = ({ navigation }) => {
  const { register, handleSubmit, setValue } = useForm()
  const passwordRef = useRef()
  const onNext = (nextOne) => {
    nextOne?.current?.focus()
  }
  const onValid = (data) => {
    console.log(data);
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
      <AuthButton loading={true} text="Log in" onPress={handleSubmit(onValid)} />
    </AuthLayout>);
}

export default LogIn;