import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { CustomDrawer } from '../components/drawer/customDrawer';
import { AppTabRoutes } from './appTab.routes';

const Drawer = createDrawerNavigator();

export function HomeDrawer() {
  return (
    <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    initialRouteName= 'HomeDrawerHome'
    screenOptions={{
      headerShown: false,
      headerStyle: {
        backgroundColor: '#aacc00',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
      },
      headerLeftContainerStyle: {
      },
      swipeEnabled: false
    }
    }>
      <Drawer.Screen name='HomeDrawerHome' component={AppTabRoutes}
      />
    </Drawer.Navigator>
  );
}