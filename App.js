import AppLoading from 'expo-app-loading';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import styled from 'styled-components/native';
import LoggedOutNav from './navigators/LoggedOutNav';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  const [loading, setLoading] = useState(true)
  const onFinish = () => setLoading(false)
  const preload = () => {
    const fontToLoad = [Ionicons.font]
    const fontPromises = fontToLoad.map(font => Font.loadAsync(font))
    const imagesToLoad = [require("./assets/Instagram-Logo.png")]
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

  const Logo = styled.Image`
    max-width: 50%;
    width: 100%;
    height: 100px;
    margin-bottom: 20px;
  `


  return (
    <NavigationContainer>
      <LoggedOutNav></LoggedOutNav>
    </NavigationContainer>
  );
}

