/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';


export default class Setup extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text style={{fontFamily: 'Raleway',fontSize: 30}}>I'm the MyComponent component</Text>
      <Text style={styles.huruf}>I'm the MyComponent component</Text>
      <Text style={styles.customeFont3}>I'm the MyComponent component</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  huruf:{
      fontFamily: 'KaushanScript-Regular',fontSize: 30
  },

});
