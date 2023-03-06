import React, {useContext} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import {StatusBar, Text} from 'react-native';
import AppNavigation from './AppNavigation';

const config = {
  screens: {
    Home: {
      path: 'Home',
    },
    AboutMe: 'About-Me',
    Projects: 'Projects',
    ContactMe: 'Contact-Me',
    NotFound: '*',
  },
};

const linking = {
  // prefixes: ['https://dleegan.com', 'dleegan://', 'http://localhost:8080'],
  prefixes: [],
  config,
};

const NavigationRoot = () => {
  return (
    // <NavigationContainer linking={linking} fallback={<Text>Loading...</Text>}>
    <NavigationContainer>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default NavigationRoot;
