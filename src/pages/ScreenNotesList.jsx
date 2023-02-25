import React, { useContext, useEffect, useState } from 'react';
import { Pressable, SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';
import { AuthContext } from '../contexts/auth';
import NotesService from '../services/notes';
import { Ionicons } from "@expo/vector-icons";

export function ScreenNotesList({ navigation }) {

  const { user, loading } = useContext(AuthContext);
  const [fetching, setFetching] = useState(true);
  const [notes, setNotes] = useState();

  function handleNoteClick(id) {
    navigation.navigate('NoteHomeStack', {
      noteId: id,
    })
  }

  useEffect(() => {
    async function fetchData() {
        try {
          const response = await NotesService.getByAuthor(user.id)
          setNotes(response.data);
        } catch (error) {
          console.log(error.response.data.message);
        }
        setFetching(false)
    }

    if (loading === false) {
      fetchData()
    }

  }, [])

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.searchWrapper}>
        <View style={styles.searchInputView}>
          <Ionicons name='ios-search' size={20} color={'#adb5bd'} />
          <TextInput style={styles.searchInput}
          placeholder={'Search'}
          placeholderTextColor={'#adb5bd'}
          />
        </View>
        <View style={styles.searchBottomWrapper}>
          <Text style={styles.searchBottomText}>Edit</Text>
          <Text style={styles.searchBottomText}>Add new</Text>
        </View>
      </View>
      {fetching ? <Text>Loading...</Text> : 
      <View style={styles.notesList}>
        {notes.map((note) => 
          <Pressable onPress={() => {handleNoteClick(note.id)}} 
            key={note.id}
          >
          <NoteListElement
            title={note.title}
            body={note.body}
          />
          </Pressable>
        )}
      </View>
      }
    </SafeAreaView>

  );
}

function NoteListElement(props) {
  return (
      <View style={styles.listElement}>
        <Text numberOfLines={1} style={styles.elementTitle}>{props.title}</Text>
        <Text numberOfLines={1} style={styles.elementBody}>{props.body}</Text>
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchWrapper: {
  },
  searchInputView: {
    backgroundColor: '#e9ecef',
    borderRadius: 10,
    margin: 12,
    paddingHorizontal: 12,
    flexDirection: 'row',
    alignItems: 'center'
  },
  searchInput: {
    height: 40,
    width: '100%',
    paddingLeft: 8,
    color: '#212529'
  },
  searchBottomWrapper: {
    flexDirection: 'row',
    marginHorizontal: 12,
    justifyContent: 'space-between',
    marginVertical: 12
  },
  searchBottomText: {
    fontSize: 16,
    color: '#007aff'
  },
  notesList: {
    borderBottomWidth: 1,
    borderBottomColor: '#dee2e6'
  },
  listElement: {
    borderTopWidth: 1,
    borderTopColor: '#dee2e6',
    padding: 12,
  },
  elementTitle: {
    color: '#212529',
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4
  },
  elementBody: {
    color: '#6c757d',
    fontSize: 14
  }
})