import React,{Component} from 'react';
import {View,ScrollView,Text} from 'react-native';
import axios from 'axios';
// import {Header,Content,Footer,FooterTab,Button,Icon,Text} from 'native-base';

export default class Setup extends Component {

  state={data:''};
  constructor() {
    super();
    this.getdata();
  };

  getdata =async()=>{
    let api = axios.create({
      baseURL: `https://api.thingspeak.com/channels/1191126/fields/1.json?results=1`
    });
    let x;
    api.get('/').then(res=>{
      x = res.data.feeds[0].field1
      this.setState({data:x})
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
