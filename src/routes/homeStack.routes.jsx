import { createStackNavigator } from "@react-navigation/stack";
import { MenuHeaderLeft } from "../components/header/menuHeaderLeft";
import { NoteHeaderRight } from "../components/header/noteHeaderRight";
import { StackProvider } from "../contexts/homeStack";
import { ScreenNewNote } from "../pages/ScreenNewNote";
import { ScreenNote } from "../pages/ScreenNote";
import { ScreenNotesList } from "../pages/ScreenNotesList";

const Stack = createStackNavigator();

export function HomeStack({ navigation }) {
  return (
    <StackProvider>
      <Stack.Navigator
      initialRouteName="HomeStackHome"
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
        <Stack.Screen name='HomeStackHome' component={ScreenNotesList} 
        options={{
          title: 'Notes',
          headerLeft: () => (
            <MenuHeaderLeft 
            navigation={navigation}
            />
          )
        }}
        />
        <Stack.Screen name="HomeStackNote" component={ScreenNote} 
        options={{
          title: '',
          headerRight: () => (
            <NoteHeaderRight />
          ),
          headerRightContainerStyle: {
            paddingRight: 12
          },
        }}
        />
        <Stack.Screen name="HomeStackNewNote" component={ScreenNewNote} 
        options={{
          title: 'New Note',
        }}
        />
      </Stack.Navigator>
    </StackProvider>
  )
}
