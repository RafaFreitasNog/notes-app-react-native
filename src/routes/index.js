import React, { useContext } from 'react';
import { LoadingScreen } from '../components/loadingScreen';
import { AuthContext } from '../contexts/auth';
import { ScreenLogin } from '../pages/ScreenLogin';
import { HomeDrawer } from './homeDrawer.routes';

export default function Routes() {

  const { auth, loading } = useContext(AuthContext);

  if (loading) {
    return <LoadingScreen />
  }

  return auth ? <HomeDrawer /> : <ScreenLogin />
}