/* eslint-disable eol-last */
/* eslint-disable prettier/prettier */
/* eslint-disable no-unused-vars */
import 'react-native-gesture-handler';
import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {HomeScreen} from './src/screens';

const Stack = createStackNavigator();

export default function App() {

  const [loading, setLoading] = useState(true);

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home">
          {props => <HomeScreen {...props} />}
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}