import { createStackNavigator } from "@react-navigation/stack";
import { MenuBurguer } from "../components/header/menuBurguer";
import { HomeDrawer } from "./homeDrawer.routes";

const Stack = createStackNavigator();

export function HomeStack() {
  return (
    <Stack.Navigator
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
    </Stack.Navigator>
  )
}
