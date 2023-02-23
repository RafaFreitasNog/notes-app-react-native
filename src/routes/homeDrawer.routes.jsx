import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import { CustomDrawer } from '../components/drawer/customDrawer';
import { ScreenFavorites } from '../pages/ScreenFavorites';
import { ScreenNotesList } from '../pages/ScreenNotesList';

const Drawer = createDrawerNavigator();

export function HomeDrawer() {
  return (
    <Drawer.Navigator
    drawerContent={props => <CustomDrawer {...props} />}
    screenOptions={{
      headerStyle: {
        backgroundColor: '#aacc00',
      },
      headerTintColor: '#fff',
      headerTitleStyle: {
        fontSize: 24
      },
      headerLeftContainerStyle: {
          paddingLeft: 12
      },
    }} >
      <Drawer.Screen name='HomeDrawer' component={ScreenNotesList} 
      options={{
        title: 'Notes'
      }}
      />
      <Drawer.Screen name='FavoriteDrawer' component={ScreenFavorites} 
      options={{
        title: 'Favorites'
      }}
      />
    </Drawer.Navigator>
  );
}