import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from '@react-navigation/native'
import Routes0 from './src/routes/index0'
import Routes from './src/routes/index.js'

export default function App() {
  return (

    <NavigationContainer>
      <StatusBar styles='auto'></StatusBar>
      <Routes0 />
    </NavigationContainer>

  );
}

