import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Halaman2 from './Halaman2';

function Setup({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>
      <Button
        title="Go to Halaman2"

        onPress={() => navigation.navigate('Halaman2')}
      />
    </View>
  );
}



const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Setup">
        <Stack.Screen name="Setup"
        options={{
        title: 'My home',
        headerShown:false,
        headerStyle: {
        backgroundColor: '#f4511e',
        },

        headerTintColor: '#fff',
        headerTitleStyle: { fontWeight: 'bold'}
      }}
         component={Setup} />
        <Stack.Screen name="Halaman2" component={Halaman2} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
