/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';



export default class FirebaseTest extends Component {

  ComponentDidMount(){
    console.log("Test");
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>FirebaseTestX</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
});
