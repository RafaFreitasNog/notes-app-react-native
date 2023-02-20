import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import React from 'react';
import { StyleSheet, View } from 'react-native';
import { ScreenNotesList } from '../pages/ScreenNotesList';
import { ScreenProfile } from '../pages/ScreenProfile';

const Tab = createBottomTabNavigator()

export function AppTabRoutes() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='Notes' component={ScreenNotesList} />
      <Tab.Screen name='Profile' component={ScreenProfile} />
    </Tab.Navigator>
  );
}