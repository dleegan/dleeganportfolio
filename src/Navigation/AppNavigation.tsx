import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../Srceens/Home';
import AboutMe from '../Srceens/AboutMe';
import Projects from '../Srceens/Projects';
import ContactMe from '../Srceens/ContactMe';
import {Text, useWindowDimensions, View} from 'react-native';
import TabBar from '../Components/TabBar';
import NotFound from '../Srceens/NotFound';
import MobileMenu from '../Components/MobileMenu';

const AppNavigation = () => {
  const Stack = createNativeStackNavigator();
  const layout = useWindowDimensions();

  return (
    <>
      <TabBar.TopBar />
      <Stack.Navigator
        initialRouteName="About-Me"
        screenOptions={{
          headerShown: false,
          statusBarAnimation: 'none',
        }}>
        <Stack.Screen name="Home" component={Home} options={{title: 'Home'}} />
        <Stack.Screen
          name="About-Me"
          component={AboutMe}
          options={{title: 'About-Me'}}
        />
        <Stack.Screen
          name="Projects"
          component={Projects}
          options={{title: 'Projects'}}
        />
        <Stack.Screen
          name="Contact-Me"
          component={ContactMe}
          options={{title: 'Contact-Me'}}
        />
        <Stack.Screen
          name="NotFound"
          component={NotFound}
          options={{title: 'NotFound'}}
        />
      </Stack.Navigator>

      {/* {layout.width >= 768 && <TabBar.BottomBar />} */}
      <TabBar.BottomBar />
    </>
  );
};

export default AppNavigation;
