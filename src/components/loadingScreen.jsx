import React from 'react';
import { ActivityIndicator, SafeAreaView, StyleSheet, View } from 'react-native';

export function LoadingScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <ActivityIndicator size='large' color='#679436' />
    </SafeAreaView>
  );
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#a5be00'
  }
});