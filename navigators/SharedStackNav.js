import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import Photo from '../screens/Photo';
import Profile from '../screens/Profile';
import Feed from '../screens/Feed';
import Notifications from '../screens/Notifications';
import Search from '../screens/Search';
import Me from '../screens/Me';
import { Image, Platform } from 'react-native';

const Stack = createStackNavigator()

const StackNavFactory = ({ screenName }) => {
  return (<Stack.Navigator
    headerMode="screen"
    screenOptions={{
      headerBackTitleVisible: false,
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "black",
        shadowColor: "rgba(255,255,255,0.3)"
      }
    }}
  >
    {screenName === "Feed" ?
      <Stack.Screen name="Feed" component={Feed}
        options={{
          headerTitle: () => {
            return <Image
              source={require("../assets/Instagram-Logo.png")}
              resizeMode="contain"
              style={{
                width: 120,
                height: 40,
              }}
            />
          }
        }}
      />
      :
      null}
    {screenName === "Search" ? <Stack.Screen name="Search" component={Search} /> : null}
    {screenName === "Notifications" ? <Stack.Screen name="Notifications" component={Notifications} /> : null}
    {screenName === "Me" ? <Stack.Screen name="Me" component={Me} /> : null}
    <Stack.Screen name="Profile" component={Profile} />
    <Stack.Screen name="Photo" component={Photo} />
  </Stack.Navigator>);
}

export default StackNavFactory;