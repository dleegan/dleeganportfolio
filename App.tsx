import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import TabBar from './src/Components/TabBar';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <View style={styles.container}>
      <View style={styles.terminal}>
        <TabBar />
        <Text>I'm Leegan Dupros</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#010C15',
  },
  terminal: {
    flex: 1,
    backgroundColor: '#011627',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1E2D3D',
  },
});

export default App;
