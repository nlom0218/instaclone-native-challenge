import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';
import TabIcon from '../components/nav/TabIcon';
import Me from '../screens/Me';
import StackNavFactory from './SharedStackNav';

const Tabs = createBottomTabNavigator()

const LoggedInNav = () => {
  return (<Tabs.Navigator
    tabBarOptions={{
      style: {
        backgroundColor: "black",
        borderTopColor: "rgba(255,255,255,0.3)"
      },
      activeTintColor: "white",
      showLabel: false
    }}
  >
    <Tabs.Screen name="Feed" options={{
      tabBarIcon: ({ focused, color, size }) => <TabIcon iconName="home" color={color} focused={focused} />
    }}
    >
      {() => <StackNavFactory screenName="Feed" />}
    </Tabs.Screen>

    <Tabs.Screen name="Search" options={{
      tabBarIcon: ({ focused, color, size }) => <TabIcon iconName="search" color={color} focused={focused} />
    }}>
      {() => <StackNavFactory screenName="Search" />}
    </Tabs.Screen>

    <Tabs.Screen name="Camera" component={View} options={{
      tabBarIcon: ({ focused, color, size }) => <TabIcon iconName="camera" color={color} focused={focused} />
    }} />

    <Tabs.Screen name="Notifications" options={{
      tabBarIcon: ({ focused, color, size }) => <TabIcon iconName="heart" color={color} focused={focused} />
    }}>
      {() => <StackNavFactory screenName="Notifications" />}
    </Tabs.Screen>

    <Tabs.Screen name="Me" options={{
      tabBarIcon: ({ focused, color, size }) => <TabIcon iconName="person" color={color} focused={focused} />
    }}>
      {() => <StackNavFactory screenName="Me" />}
    </Tabs.Screen>
  </Tabs.Navigator>);
}

export default LoggedInNav;