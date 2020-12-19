/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Login extends Component {
  render() {
    return (
      <View >
      <Text style={styles.TextTitle}>Login dulu ya!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  TextTitle:{
    fontFamily: "Raleway-Regular",
    fontWeight: '700',
    fontSize: 30,
    lineHeight: 29.35

  }
});
