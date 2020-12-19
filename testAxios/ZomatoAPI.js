

import React,{Component} from 'react';
import {View,ScrollView,Text} from 'react-native';
import axios from 'axios';

export default class ZomatoAPI extends Component {

  state={data:''};
  constructor() {
    super();
    this.getdata();
  };

  getdata =async()=>{
    let api = axios.create({
      baseURL: `https://developers.zomato.com/api/v2.1/categories`
    });
    let x;
    api.defaults.headers.common['user-key'] = '9f620278d1adb224c5c59fd77f29847d';
    api.get('/').then(res=>{
      x = res.data;
      console.log(x)
      this.setState({data:123})
    })


  }
  render(){
    return(
      <ScrollView>
        <View>
          <Text>Hayoo   "{this.state.data}"
          </Text>
        </View>
      </ScrollView>
    )
  }
}
