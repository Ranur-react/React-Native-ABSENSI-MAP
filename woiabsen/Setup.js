/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import Login from './View/Login';
import Home from './View/Home';
import Layoutdimension from './Protyping/Layoutdimension';
import Vanillapi from './Protyping/Vanillapi';
import Firebasetest from './Protyping/FirebaseTest';

export default class Setup extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Firebasetest />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
