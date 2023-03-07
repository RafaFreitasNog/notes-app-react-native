import { createStackNavigator } from "@react-navigation/stack";
import { ScreenProfile } from "../pages/ScreenProfile";

const Stack = createStackNavigator();

export function ProfileStack() {
  return (
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
      headerShown: false
      }}
    >
      <Stack.Screen name='Prof' component={ScreenProfile} 
      options={{
        title: 'Profile'
      }}
      />
    </Stack.Navigator>
  )
}