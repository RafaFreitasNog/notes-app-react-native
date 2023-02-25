import React, { useContext, useEffect, useState } from 'react';
import { KeyboardAvoidingView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';
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
      <Text></Text>
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
          onChangeText={(value) => { handleTitleChange(value) }}
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
  inputsScroll: {
    backgroundColor: '#ff4',
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