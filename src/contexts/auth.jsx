import React, { createContext, useEffect, useState } from "react";
import UserService from "../services/users";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [auth, setAuth] = useState(false)
  const [loading, setLoading] = useState(true)
  const [user, setUser] = useState()

  async function signIn(email, password) {
    try {
      const response = await UserService.signIn({
        email: email,
        password: password
      })
      api.defaults.headers.authtoken = `${response.data.token}`
      setUser(response.data.user)
      setAuth(true)
      await AsyncStorage.setItem('@noter_user', JSON.stringify(response.data.user))
      await AsyncStorage.setItem('@noter_token', response.data.token)
    } catch (error) {
      return error
    }
    setLoading(false)
  }

  async function signOut() {
    setAuth(false)
    await AsyncStorage.removeItem('@noter_user')
    await AsyncStorage.removeItem('@noter_token')
    api.defaults.headers.authtoken = undefined
  }

  async function revalidateUser() {
    try {
      const response = await UserService.revalidate() 
      setUser(response.data)
      setAuth(true)
      await AsyncStorage.setItem('@noter_user', JSON.stringify(response.data))
    } catch (error) {
      console.log(error);
      signOut()
    }
    setLoading(false)
  }
  
  useEffect(() => {
    async function loadStorage() {
      try {
        const storageToken = await AsyncStorage.getItem('@noter_token')
        
        if (storageToken) {
          api.defaults.headers.authtoken = `${storageToken}`
          revalidateUser()
        } else {
          setLoading(false)
        }
      } catch (error) {
        console.log(error);
      }
    }

    loadStorage()

  }, [])

  return (
    <AuthContext.Provider value={{auth, loading, user, signIn, signOut}}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider}