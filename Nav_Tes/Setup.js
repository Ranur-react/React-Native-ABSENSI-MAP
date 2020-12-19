import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';


import Halaman2 from './Halaman2';

const Stack = createStackNavigator();

function Setup() {
  return (
    <View>
      <Text>Satu
      </Text>
    </View>
  );
}

export default Setup;
