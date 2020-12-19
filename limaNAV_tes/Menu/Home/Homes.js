  import React,{Component} from 'react';
import Footers from "../Footer";
import {View ,StatusBar} from 'react-native';
import ImageSlider from 'react-native-image-slider';
import {Content,Text,Button} from 'native-base';
import axios from 'axios';

export default class Homes extends Component {

  constructor() {
  super();
    this.state={
      images:["https://images.unsplash.com/photo-1563297782-f4cba03a3fb9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=675&q=80",
              "https://images.unsplash.com/photo-1558467523-46113f1fcf72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80",
              "https://images.unsplash.com/photo-1558467523-46113f1fcf72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1189&q=80"
    ],
    datacek:["Kategori 1","Kategori 2","Kategori 3","Kategori 4"],
    datacategory:[],
  };
  }
  getdatacategory=()=>{
   axios.get('https://developers.zomato.com/api/v2.1/categories',
   {header:{"user-key":"9f620278d1adb224c5c59fd77f29847d"}})
   .then((res)=>{
     this.setState({datacategory:res})
   });

  }
  componentDidMount(){
    this.getdatacategory();
  }
  render(){

    return(
      <View style={{flex: 1}}>
      <StatusBar backgroundColor={"rgba(58, 113, 223,0.9)"}/>
      {
        //images slider
      }
        <View style={{height:150}}>
            <ImageSlider images={this.state.images} autoPlayWithInterval={3000}/>
        </View>
      {
        //Category
      }
      {
        // <Text style={{marginTop:20,marginLeft: 10}}>Pilihan Kategori</Text>
      }

        <Content horizontal style={{marginTop: -20}}>
        {
          this.state.datacek.map((data)=>{
              return(
                <Button rounded >
                  <Text> {data}</Text>
                </Button>
              )
          })
        }
        </Content>
{
  // this.state.datacategory.map((item,index,array)=>{
  //   <Text>{arr}</Text>
  //
  // })
}
      <Footers/>
      </View>
    )
  }
}
