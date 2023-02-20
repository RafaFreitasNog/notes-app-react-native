import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import { AuthProvider } from './src/contexts/auth';
import Routes from './src/routes';

export default function App() {

  return (
    <View style={styles.container}>
      <AuthProvider>
        <NavigationContainer>
          <Routes />  
        </NavigationContainer>
      </AuthProvider>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
