import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { HomeStack } from './homeStack.routes';
import { ProfileStack } from './profileStack.routes';

const Tab = createBottomTabNavigator()

export function AppTabRoutes() {
  return (
    <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: '#aacc00',
      tabBarInactiveTintColor: '#adb5bd',
      tabBarShowLabel: false
      }}
    >
      <Tab.Screen name='Home' component={HomeStack} 
      options={{
        title: 'Home',
        tabBarIcon: ({color, size, focused}) => {
          if (focused) {
             return <Ionicons name='home' size={size} color={color} />
            }
          return <Ionicons name='home-outline' size={size} color={color} />
          }
      }} 
      />
      <Tab.Screen name='Profile' component={ProfileStack} 
      options={{
        title: 'Profile',
        tabBarIcon: ({color, size, focused}) => {
          if (focused) {
             return <Ionicons name='person' size={size} color={color} />
            }
          return <Ionicons name='person-outline' size={size} color={color} />
          }
      }}       
      />
    </Tab.Navigator>
  );
}