import React, { useContext } from 'react';
import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../contexts/auth';


export function ScreenProfile() {

  const { user } = useContext(AuthContext)

  return (
    <SafeAreaView style={styles.container}>
      <Text>{user.name}</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  }
})