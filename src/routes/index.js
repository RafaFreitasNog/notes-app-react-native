import React, { useContext } from 'react';
import { StyleSheet, View } from 'react-native';
import { LoadingScreen } from '../components/loadingScreen';
import { AuthContext } from '../contexts/auth';
import { ScreenLogin } from '../pages/ScreenLogin';
import { ScreenNotesList } from '../pages/ScreenNotesList';

export default function Routes() {

  const { auth, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingScreen />
  }

  return auth ? <ScreenNotesList /> : <ScreenLogin />
}