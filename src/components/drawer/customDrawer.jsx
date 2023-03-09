import { DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer';
import React, { useContext, useEffect } from 'react';
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../../contexts/auth';
import { Ionicons } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

export function CustomDrawer(props) {

  const { user, signOut } = useContext(AuthContext)

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.drawerScroll}>

        <View style={styles.profileSection}>

          <View style={styles.imageSection}>
            <Ionicons name='person-circle' color='#212529' size={56} />
          </View>

          <View style={styles.textSection}>
            <Text style={styles.nameText}>{user.name}</Text>

            <Text style={styles.usernameText}>@{user.username}</Text>

            <View style={styles.followInfoContainer}>
              <View style={styles.followInfoView}>
                <Text style={styles.followNumber}>{user._count.following} <Text style={styles.followText}>Following</Text></Text>
              </View>

              <View style={styles.followInfoView}>
                <Text style={styles.followNumber}>{user._count.followers} <Text style={styles.followText}>Followers</Text></Text>
              </View>
            </View>

            <View style={styles.notesView}>
              <Ionicons name='ios-newspaper' color={'#212529'} size={16} />
              <Text style={styles.notesText}>{user._count.written_posts} <Text style={styles.notesLight}>Notes</Text></Text>
            </View>

          </View>
        </View>

        <View style={styles.listwrapper}>
          <DrawerItemList {...props} />
        </View>
      </ScrollView>
      <View style={styles.bottomSection}>
        <Pressable onPress={() => { signOut() }} >
          <View style={styles.bottomSectionItem}>
            <Ionicons name='ios-exit' color={'#495057'} size={24} style={styles.bottomSectionIcon} />
            <Text style={styles.bottomSectionText}>Sign Out</Text>
          </View>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  drawerScroll: {
    paddingLeft: 32
  },
  listwrapper: {
    backgroundColor: '#fff',
    paddingVertical: 12,
  },
  nameText: {
    color: '#212529',
    fontSize: 16,
    fontWeight: 'bold',
  },
  usernameText: {
    color: '#6c757d',
    fontSize: 14,
    marginTop: 4
  },
  notesView: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 12
  },
  notesText: {
    color: '#212529',
    fontSize: 14,
    fontWeight: 'bold',
    marginHorizontal: 4
  },
  notesLight: {
    color: '#6c757d',
    fontWeight: 'normal'
  },
  followInfoContainer: {
    marginTop: 12,
    flexDirection: 'row'
  },
  followInfoView: {
    alignItems: 'center',
    marginRight: 12
  },
  followNumber: {
    fontSize: 14,
    fontWeight: 'bold'
  },
  followText: {
    fontWeight: 'normal',
    color: '#6c757d'
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