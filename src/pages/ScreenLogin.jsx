import React, { useContext, useState } from 'react';
import { Keyboard, KeyboardAvoidingView, Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import { AuthContext } from '../contexts/auth';

export function ScreenLogin() {

  const { auth, user, signIn } = useContext(AuthContext);
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  async function handleSignIn() {
    try {
      const response = await signIn(email, password)
      if (response) {
        console.log(response.response.data.message);
      }
    } catch (error) {
      console.log('error');
    }
  }

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={styles.avoidKeyboard}>
      <SafeAreaView style={styles.container}>
        <TouchableWithoutFeedback onPress={() => { Keyboard.dismiss() }}>
          <View style={styles.contentWrapper}>
            <Text style={styles.logoText}>Noter</Text>

            <View style={styles.inputWrapper}>
              <Text style={styles.loginText}>Login</Text>
              <TextInput
                style={[styles.textInput, styles.firstInput]}
                placeholder='e-mail'
                onChangeText={(value) => { setEmail(value) }}
                value={email}
                keyboardType='email-address'
                selectionColor={'#679436'}
                keyboardAppearance='dark'
              />
              <TextInput
                style={styles.textInput}
                placeholder='password'
                onChangeText={(value) => { setPassword(value) }}
                value={password}
                secureTextEntry={true}
                selectionColor={'#679436'}
                keyboardAppearance='dark'
              />
              <Pressable
                style={styles.signInButton}
                onPress={() => { handleSignIn() }}>
                <Text style={styles.signInText}>Sign In!</Text>
              </Pressable>
            </View>

          </View>
        </TouchableWithoutFeedback>
      </SafeAreaView>
    </KeyboardAvoidingView>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#aacc00',
  },
  avoidKeyboard: {
    flex: 1
  },
  scrollView: {
    flex: 1
  },
  contentWrapper: {
    flex: 1,
    marginHorizontal: 48,
    alignItems: 'center',
    justifyContent: 'space-evenly'
  },
  logoText: {
    fontSize: 72,
    fontWeight: 'bold',
    color: '#fff',
  },
  loginText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 32
  },
  inputWrapper: {
    width: '100%',
    alignItems: 'center',
  },
  textInput: {
    backgroundColor: '#fff',
    width: '100%',
    height: 48,
    borderRadius: '50%',
    paddingLeft: 12,
  }, 
  firstInput: {
    marginBottom: 24
  },
  signInButton: {
    height: 48,
    backgroundColor: '#05668d',
    borderRadius: 4,
    marginTop: 32,
    alignItems: 'center',
    justifyContent: 'center',
  },
  signInText: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginHorizontal: 24
  },
});