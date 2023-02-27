import { createStackNavigator } from "@react-navigation/stack";
import { Text } from "react-native";
import { MenuBurguer } from "../components/header/menuBurguer";
import { ScreenNote } from "../pages/ScreenNote";
import { HomeDrawer } from "./homeDrawer.routes";

const Stack = createStackNavigator();

export function HomeStack() {
  return (
//    <SaveNoteProvider>
      <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#aacc00',
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
        },
        headerLeftContainerStyle: {
            paddingLeft: 12
        },
        }}
      >
        <Stack.Screen name='HomeStack' component={HomeDrawer} 
        options={{
          headerLeft: () => (
            <MenuBurguer />
          ),
          headerShown: false,
          title: 'Notes'
        }}
        />
        <Stack.Screen name="NoteHomeStack" component={ScreenNote} 
        options={{
          title: 'Notes',
        }}
        />
      </Stack.Navigator>
//    </SaveNoteProvider>
  )
}
