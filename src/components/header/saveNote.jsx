import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { SaveNoteContext } from '../../contexts/saveNote';

export function SaveNote() {

  const { saved } = useContext(SaveNoteContext)

  return (
    <View style={styles.container}>
      {saved 
      ? <Text style={styles.text}>Saved</Text> 
      : <Text>oi</Text>}
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginRight: 12
  },
  text: {
    color: '#fff',
    fontSize: 16
  }
})