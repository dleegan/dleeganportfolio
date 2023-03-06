import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import TabBar from '../../Components/TabBar/TopBar';
import Colors from '../../Assets/Styles/Colors';
import Card from '../../Components/Cards';

const Projects = () => {
  return (
    <View style={styles.container}>
      <Card.ItemCard />
      <Card.ItemCard />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: Colors.defaultBG,
    flexDirection: 'row',
    rowGap: 20,
    columnGap: 20,
    gap: 20,
  },
  terminal: {
    flex: 1,
    backgroundColor: '#011627',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1E2D3D',
  },
});

export default Projects;
