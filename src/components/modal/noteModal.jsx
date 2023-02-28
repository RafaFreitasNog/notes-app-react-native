import React, { useContext } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { StackContext } from '../../contexts/homeStack';
import { Ionicons } from "@expo/vector-icons";
import NotesService from '../../services/notes';

export function NoteModal(props) {

  const { setModalVisible } = useContext(StackContext)

  async function handleDelete() {
    try {
      const response = await NotesService.deleteNote(props.noteId)
      console.log(response.data);
      setModalVisible(false)
      props.navigation.navigate('HomeStack')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity style={{flex: 1}} onPress={() => {setModalVisible(false)}}></TouchableOpacity>

      <View style={styles.content}>
        <Pressable style={styles.button} onPress={() => {handleDelete()}}>
          <Ionicons name='ios-trash-outline' size={32} color={'#e5383b'}/>
          <Text style={[styles.text, styles.delete]}>Delete note</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {setModalVisible(false)}}>
          <Ionicons name='ios-close-circle-outline' size={32} color={'#212529'}/>
          <Text style={[styles.text, styles.close]}>Close menu</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    backgroundColor: '#fff',
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  button: {
    paddingHorizontal: 24,
    paddingVertical: 20,
    borderTopWidth: 1,
    borderTopColor: '#e9ecef',
    flexDirection: 'row',
    alignContent: 'center',
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  text: {
    fontSize: 16,
    marginLeft: 8
  },
  delete: {
    color: '#e5383b'
  },
  close: {
    color: '#212529'
  }
})