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
      setModalVisible(false)
      props.navigation.navigate('HomeStackHome')
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={{flex: 1}} onPress={() => {setModalVisible(false)}}></TouchableOpacity>

      <View style={styles.content}>
        <Pressable style={[styles.button, styles.topButton]} onPress={() => {}}>
          <Ionicons name='ios-duplicate-outline' size={24} color={'#6c757d'}/>
          <Text style={[styles.text, styles.others]}>Duplicate</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {handleDelete()}}>
          <Ionicons name='ios-trash-outline' size={24} color={'#e5383b'}/>
          <Text style={[styles.text, styles.delete]}>Delete note</Text>
        </Pressable>
        <Pressable style={styles.button} onPress={() => {setModalVisible(false)}}>
          <Ionicons name='ios-close-circle-outline' size={24} color={'#212529'}/>
          <Text style={[styles.text, styles.close]}>Close menu</Text>
        </Pressable>
      </View>
    </View>
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
    shadowColor: "#000",
    paddingBottom: 40,

    shadowOffset: {
	    width: 0,
	    height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
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
  topButton: {
    borderTopWidth: 0,
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
  },
  others: {
    color: '#6c757d'
  },
})