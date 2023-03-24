import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigation from './AppNavigation';
import {navigationRef} from '../Utils/Functions/RootNavigation';
import AppText from '../Components/Text';
import {Linking} from 'react-native';

const config = {
  screens: {
    Home: {
      path: 'Home',
    },
    AboutMe: {
      path: 'About-Me',
    },
    Projects: 'Projects',
    ContactMe: 'Contact-Me',
    NotFound: '*',
  },
};

const linking = {
  prefixes: ['http://localhost:8080'],
  // prefixes: [],
  config,
};

const NavigationRoot = () => {
  return (
    <NavigationContainer
      linking={linking}
      fallback={<AppText>Loading...</AppText>}>
      {/* <NavigationContainer ref={navigationRef}> */}
      <AppNavigation />
    </NavigationContainer>
  );
};

export default NavigationRoot;
