import React, { useContext, useEffect, useState } from 'react';
import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
import { AuthContext } from '../contexts/auth';
import NotesService from '../services/notes';

export function ScreenNote({ route }) {

  const { note } = route.params
  const { loading } = useContext(AuthContext)
  const [fetching, setFetching] = useState(true)
  const [title, setTitle] = useState()
  const [body, setBody] = useState()

  function handleTitleChange(value) {
    setTitle(value)
  }

  function handleBodyChange(value) {
    setBody(value)
  }

  async function handleSaveClick() {
    try {
      const response = await NotesService.editNote(note.id, {
        title: title,
        body: body
      })
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

  return (
    <View style={styles.container}>
      <Pressable style={styles.saveButton} 
      onPress={() => {handleSaveClick()}}
      >
        <Text style={styles.buttonText}>Save</Text>
      </Pressable>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    paddingVertical: 16
  },
  saveButton: {
    backgroundColor: '#05668d',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 16
  },
  buttonText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
    paddingVertical: 6
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