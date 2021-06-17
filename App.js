import AppLoading from 'expo-app-loading';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import styled from 'styled-components/native';
import LoggedOutNav from './navigators/LoggedOutNav';
import { NavigationContainer } from '@react-navigation/native';
import { AppearanceProvider, Appearance } from 'react-native-appearance';
import { ApolloProvider, useReactiveVar } from '@apollo/client';
import client, { isLoggedInVar } from './apollo';
import LoggedInNav from './navigators/LoggedInNav';

export default function App() {
  const [loading, setLoading] = useState(true)
  const onFinish = () => setLoading(false)
  const isLoggedIn = useReactiveVar(isLoggedInVar)
  const preload = () => {
    const fontToLoad = [Ionicons.font]
    const fontPromises = fontToLoad.map(font => Font.loadAsync(font))
    const imagesToLoad = [require("./assets/Instagram-Logo.png"), "https://raw.githubusercontent.com/nomadcoders/instaclone-native/master/assets/logo.png"]
    const imagesPromises = imagesToLoad.map(image => Asset.loadAsync(image))
    return Promise.all([...fontPromises, ...imagesPromises])
  }
  if (loading) {
    return <AppLoading
      startAsync={preload}
      onError={console.warn}
      onFinish={onFinish}
    />
  }

  return (
    <ApolloProvider client={client}>
      <AppearanceProvider>
        <NavigationContainer>
          {isLoggedIn ? <LoggedInNav /> : <LoggedOutNav />}
        </NavigationContainer>
      </AppearanceProvider>
    </ApolloProvider>
  );
}

