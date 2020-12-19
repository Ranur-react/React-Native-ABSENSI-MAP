
import React,{Component} from 'react';
import {Text,TextInput,View,StyleSheet,ScrollView,SafeAreaView} from 'react-native';

class App extends Component {
  render(){
    return(
  <SafeAreaView>
      <View style={styles.alas}>
      </View>
      <View style={styles.depan}>
      </View>
  </SafeAreaView>
    )
  }
}
export default App;

const styles = StyleSheet.create({
alas:{
  position: 'absolute',
  top: 0,
  left: 0,
  height: "100%",
  width: 200,
  backgroundColor: "red",
  zIndex: -1,
},depan:{
  top: 150,
  left: 150,
  height: 200,
  width: 200,
  backgroundColor: "green",
}


});
