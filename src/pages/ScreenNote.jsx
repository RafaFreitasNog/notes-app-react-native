import React, { useContext, useEffect, useState } from 'react';
import { Modal, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { AuthContext } from '../contexts/auth';
import NotesService from '../services/notes';
import { Ionicons } from "@expo/vector-icons";
import { StackContext } from '../contexts/homeStack';
import { NoteModal } from '../components/modal/noteModal';

export function ScreenNote({ route, navigation }) {

  const { note } = route.params
  const { loading } = useContext(AuthContext)
  const { modalVisible, setModalVisible } = useContext(StackContext)
  const [fetching, setFetching] = useState(true)
  const [edited, setEdited] = useState(false)
  const [saved, setSaved] = useState(true)
  const [title, setTitle] = useState('')
  const [body, setBody] = useState('')

  useEffect(() => {
    navigation.addListener('focus', () => {
      navigation.getParent().getParent().setOptions({
        swipeEnabled: false
      })
    })
  }, [])

  function handleTitleChange(value) {
    setTitle(value)
    if (edited === false) {
      setEdited(true)
    }
    setSaved(false)
  }
  
  function handleBodyChange(value) {
    setBody(value)
    if (edited === false) {
      setEdited(true)
    }
    setSaved(false)
  }

  async function handleSaveClick() {
    try {
      const response = await NotesService.editNote(note.id, {
        title: title,
        body: body
      })
      setSaved(true)
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    async function fetchData() {
      const response = await NotesService.getById(note.id)
      setTitle(response.data.title)
      setBody(response.data.body)
    }

    if (loading == false) {
      fetchData()
    }
  }, [])

  useEffect(() => {
    if (edited) {      
      const timer = setTimeout(() => {
        handleSaveClick()
      }, 1000)
  
      return () => clearTimeout(timer)
    }
  }, [edited, title, body])

  return (
    <View style={styles.container}>
      {saved ? <Saved /> : <Saving />}
      <ScrollView style={styles.inputsScroll}>
        <TextInput
          style={styles.titleInput}
          value={title}
          placeholder='Title'
          onChangeText={(value) => { handleTitleChange(value) }}
          multiline={true}
        />
        <TextInput
          style={styles.bodyInput}
          value={body}
          placeholder='Body'
          onChangeText={(value) => { handleBodyChange(value) }}
          multiline={true}
        />
      </ScrollView>
      <Modal
      visible={modalVisible}
      transparent={true}
      animationType={'slide'}
      onRequestClose={() => {setModalVisible(true)}}
      >
        <NoteModal 
        noteId={note.id}
        navigation={navigation}
        />
      </Modal>
    </View>
  );
}

function Saved() {
  return (
    <View style={styles.statusConteiner}>
      <Ionicons name='ios-checkmark-done' size={18} color={'#aacc00'} />
      <Text style={styles.saveStatus}>Saved</Text>
    </View>
  )
}

function Saving() {
  return (
    <View style={styles.statusConteiner}>
      <Ionicons name='ios-cloud-upload' size={18} color={'#adb5bd'} />
      <Text style={styles.saveStatus}>Saving...</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  statusConteiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    marginBottom: 6,
  },
  saveStatus: {
    color: '#adb5bd',
    fontSize: 14,
    marginLeft: 4
  },
  inputsScroll: {
    flex: 1
  },
  titleInput: {
    color: '#212529',
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8
  },
  bodyInput: {
    color: '#212529',
    fontSize: 16
  },
})