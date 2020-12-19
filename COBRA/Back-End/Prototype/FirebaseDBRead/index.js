/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import FirebaseSetup from './../FirebaseSetup';
export default class FirebaseDBRead extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Firebase Read try to get-
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
