/* @flow weak */

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


import DBRead from './Back-End/Prototype/FirebaseDBRead';
import FirebaseSetup from './Back-End/Prototype/FirebaseSetup';
import DBWrite from './Back-End/Prototype/FirebaseDBWrite';
const Setup = ({}) => (
  <View style={styles.container}>
    <DBWrite />
  </View>
);

export default Setup;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
