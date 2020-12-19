/* @flow */

import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';

const CallApiVanilla =()=> {
  const JSONdataForAPIPOST={
      name: "morpheus",
      job: "leader"
  }
  console.log("data OBJEK Biasa",JSONdataForAPIPOST);
  console.log("data Stringify",JSON.stringify(JSONdataForAPIPOST));
  //call API dengan Method GET
  fetch('https://reqres.in/api/users/2')
  .then(response => response.json())
  .then(json => console.log(json))


  //call API dengan Method POST
  fetch('https://reqres.in/api/users',{
    method: 'POST',
    headers:{
      'content-type': 'aplications/json'
    },
    body:JSON.stringify(JSONdataForAPIPOST)
  }).then(respons=>respons.json()).then(json=>{
    console.log('post Response',json)
  })


  return(
    <View style={styles.container}>
      <Text style={styles.textTitle}>Call Api Vanilla </ Text>
    </View>
  )
}

export default CallApiVanilla;



const styles = StyleSheet.create({
  container: {
    padding: 20
  },
  textTitle:{
    textAlign: 'center',
  }
});
