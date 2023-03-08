import React from 'react';
import { Ionicons } from "@expo/vector-icons";
import { Pressable } from 'react-native';

export function MenuHeaderLeft({navigation}) {

  function handlePress() {
    navigation.getParent().openDrawer()
  }

  return (
    <Pressable onPress={() => {handlePress()}}>
      <Ionicons name='ios-menu' size={24} color='#fff'/>
    </Pressable>
  );
}
