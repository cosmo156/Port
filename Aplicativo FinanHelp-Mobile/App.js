import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

import Appp from './FINANHELP/App';

export default function App() {
  return (
    <View style={styles.container}>
      <Appp />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
