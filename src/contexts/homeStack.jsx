import React, { createContext, useEffect, useState } from "react";
import UserService from "../services/users";
import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../services/api";

const StackContext = createContext();

function StackProvider({ children }) {

  const [modalVisible, setModalVisible] = useState(false)

  return (
    <StackContext.Provider value={{ modalVisible, setModalVisible }}>
      {children}
    </StackContext.Provider>
  )
}

export {StackContext, StackProvider}