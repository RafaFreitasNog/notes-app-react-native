import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export function ScreenNote({ route }) {

  const { noteId } = route.params

  return (
    <View style={styles.container}>
      <Text>Notes Page</Text>
      <Text>{noteId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})