/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Alert
} from 'react-native';
import FirebaseSetup from './../FirebaseSetup';

const referensiDB=FirebaseSetup.database().ref('KONTAK');
export default class FirebaseDBWrite extends Component {
  constructor (props) {
  super(props);
  this.state = {
    ab: 'ranurx',
    ac: 'ranur@'
  }


}

  BasicWrite(){
    FirebaseSetup.database().ref('users/1').set({
      username: 'Rahmat Nur',
      email: 'ranur@gmail'
    }).then((e)=>{
          Alert.alert('Sukses','Sukses Write')
          }).catch( (e)=>{
            console.log("Eror ",e);
            })
        console.log("Play....!");
  }
  BasicUpdate=()=>{
    // let a=state.ab;
    console.log();
    FirebaseSetup.database().ref('users/1').update({
      username:this.state.ab ,
      email: this.state.ac
    }).then((e)=>{
          Alert.alert('Sukses','Sukses Write')
          }).catch( (e)=>{
            console.log("Eror ",e);
            })
        console.log("Play....!");

  }

  onPlay(){

        const data={
          data1:"1010",
          data2:123
        }
        referensiDB.push(data)
        .then((e)=>{
          Alert.alert('Sukses','Sukses Write')
          }).catch( (e)=>{
            console.log("Eror ",e);
            })
        console.log("Play....!");
  }
  onPlayDelete(){

        referensiDB.remove()
        .then((e)=>{
          Alert.alert('Sukses','Sukses Delete')
          }).catch( (e)=>{
            console.log("Eror ",e);
            })
        console.log("Play....!");
  }
  
  render()

  {
    return (
      <View style={styles.container}>
      <Text
        onPress={this.BasicWrite}
        style={styles.TextLabek}

      >
          Basic Write Klik here...!
      </Text>
      <Text
        onPress={this.BasicUpdate}
        style={styles.TextLabek}

      >
          Basic Update {this.state.ab} Klik here...!
      </Text>
        <Text
          onPress={this.onPlay}
          style={styles.TextLabek}

        >
            Write Klik here...!
        </Text>
        <Text
          onPress={this.onPlay}
          style={styles.TextLabek}

        >
            Update Klik here...!
        </Text>
        <Text
          onPress={this.onPlayDelete}
          style={styles.TextLabek}
        >
            Delete Klik here...!
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  TextLabek:{
    fontSize:30,
    marginTop:30
  }
});
