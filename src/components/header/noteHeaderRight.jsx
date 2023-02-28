import React from 'react';
import { View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";

export function NoteHeaderRight() {
  return (
    <View>
      <Ionicons name='ios-ellipsis-horizontal' color={'#fff'} size={24} />
    </View>
  );
}