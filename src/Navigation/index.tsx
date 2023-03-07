import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import {navigationRef} from '../Utils/Functions/RootNavigation';

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
    <NavigationContainer ref={navigationRef}>
      <AppNavigation />
    </NavigationContainer>
  );
};

export default NavigationRoot;
