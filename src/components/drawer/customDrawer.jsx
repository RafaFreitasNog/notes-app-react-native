import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React, { useContext } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export function CustomDrawer(props) {

  const { user, signOut } = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <DrawerContentScrollView {...props} 
      contentContainerStyle={{
        backgroundColor: '#aacc00'
      }}
      >
        <LinearGradient style={styles.profileSection}
        colors={['#aacc00', '#d4d700']}
        start={{x: 0.5, y: 0.0}}
        locations={[0.0, 0.3]}
        >
          <View style={styles.imageSection}>
            <Ionicons name='person-circle' color='#fff' size={120}/>
          </View>
          <View style={styles.textSection}>
            <Text style={styles.nameText}>{user.name}</Text>
            <View style={styles.notesView}>
              <Ionicons name='ios-person' color={'#fff'} size={18} /> 
              <Text style={styles.notesText}>{user.username}</Text>
            </View>
            <View style={styles.notesView}>
              <Ionicons name='ios-newspaper' color={'#fff'} size={18} /> 
              <Text style={styles.notesText}>{user._count.written_posts} notes</Text>
            </View>
          </View>
        </LinearGradient>
        <View style={styles.listwrapper}>
          <DrawerItemList {...props} />
        </View>
      </DrawerContentScrollView>
      <View style={styles.bottomSection}>
        <Pressable onPress={() => {signOut()}} >
          <View style={styles.bottomSectionItem}>
            <Ionicons name='ios-exit' color={'#495057'} size={24} style={styles.bottomSectionIcon}/>
            <Text style={styles.bottomSectionText}>Sign Out</Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  listwrapper: {
    backgroundColor: '#fff',
    paddingVertical: 12
  },
  profileSection: {
    padding: 12
  },
  usernameText: {
    color: '#fff',
    fontSize: 18,
  },
  nameText: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  notesView: {
    flexDirection: 'row',
    marginTop: 4
  },
  notesText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginHorizontal: 4
  },
  bottomSection: {
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#dee2e6'
  },
  bottomSectionItem: {
    flexDirection: 'row',
    paddingLeft: 12,
    paddingVertical: 12,
    alignItems: 'center'
  },
  bottomSectionText: {
    color: '#495057',
    marginLeft: 8
  }
})