/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
} from 'react-native';
import CallApiVanilla from './CallApiVanilla';

export default class Begin extends Component {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <CallApiVanilla />
        </ScrollView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
