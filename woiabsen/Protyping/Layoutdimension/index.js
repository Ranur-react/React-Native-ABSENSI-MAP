import React, { Component } from 'react';
import Svg from 'react-native-svg';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

export default class Layoutdimension extends Component {
  constructor (props) {
    super(props)
    this.state = {dimensi: undefined}
  }

  render () {
    // If dimensions is defined, render the real view otherwise the dummy view
    if (this.state.dimensi) {
      var { dimensi } = this.state
      var { width, height } = dimensi
    }
    return (
      <View style={{flex: 1,width: 300, alignSelf: 'stretch',backgroundColor: 'grey'}} onLayout={this.onLayout}>
      <Text>{width}
           </Text>
      </View>
    )
  }

  onLayout = event => {
    if (this.state.dimensi) return // layout was already called
    let {width, height} = event.nativeEvent.layout
    this.setState({dimensi: {width, height}})
  }
}
