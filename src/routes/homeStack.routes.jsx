import { createStackNavigator } from "@react-navigation/stack";
import { NoteHeaderRight } from "../components/header/noteHeaderRight";
import { StackProvider } from "../contexts/homeStack";
import { ScreenNewNote } from "../pages/ScreenNewNote";
import { ScreenNote } from "../pages/ScreenNote";
import { HomeDrawer } from "./homeDrawer.routes";

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <StackProvider>
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
          headerShown: false,
          title: 'Notes'
        }}
        />
        <Stack.Screen name="NoteHomeStack" component={ScreenNote} 
        options={{
          title: 'Note',
          headerRight: () => (
            <NoteHeaderRight />
          ),
          headerRightContainerStyle: {
            paddingRight: 12
          },
        }}
        />
        <Stack.Screen name="NewNoteHomeStack" component={ScreenNewNote} 
        options={{
          title: 'New Note',
        }}
        />
      </Stack.Navigator>
    </StackProvider>
  )
}
