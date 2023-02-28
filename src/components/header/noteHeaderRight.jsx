import React, { useContext } from 'react';
import { Pressable, View } from 'react-native';
import { Ionicons } from "@expo/vector-icons";
import { StackContext } from '../../contexts/homeStack';

export function NoteHeaderRight() {

  const { setModalVisible } = useContext(StackContext)

  return (
    <View>
      <Pressable onPress={() => {setModalVisible(true)}} >
        <Ionicons name='ios-ellipsis-horizontal' color={'#fff'} size={24} />
      </Pressable>
    </View>
  );
}