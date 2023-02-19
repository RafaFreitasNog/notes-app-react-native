import React, { Fragment, useContext, useEffect, useState } from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../contexts/auth';
import NotesService from '../services/notes';
import UserService from '../services/users';

export function ScreenNotesList() {

  const { auth, user, loading, signOut } = useContext(AuthContext);
  const [fetching, setFetching] = useState(true);
  const [notes, setNotes] = useState();

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
    <View style={styles.container}>
      <Text>{user.name}</Text>
      <Pressable onPress={() => {signOut()}}>
        <Text>Sign Out</Text>
      </Pressable>
      {fetching ? <Text>Loading...</Text> : 
      <View>
        {notes.map((note) => 
          <Text>{note.title}</Text>
        )}
      </View>
      }
    </View>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
})