import * as React from 'react';
import {View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Footers from './Menu/Footer.js';
import Homes from './Menu/Home/Homes.js';

function Setup({ navigation }) {
  return (
    <View>
      <Footers/>
    </View>
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Setup"    options={{ headerShown:false, }} component={Setup} />
        <Stack.Screen name="Home"    options={{ headerShown:false, }} component={Homes} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
