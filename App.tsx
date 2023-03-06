import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import NavigationRoot from './src/Navigation';
import CreateResponsiveStyle from './src/Utils/Functions/ResponsiveStyles';

const App = () => {
  const layout = useWindowDimensions();
  const styles = responsiveStyle(layout);

  return (
    <View style={styles('container')}>
      <View style={styles('terminal')}>
        <NavigationRoot />
      </View>
    </View>
  );
};

export default App;

const responsiveStyle = CreateResponsiveStyle(
  {
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
  },
  {
    container: {
      flex: 1,
      padding: 10,
      backgroundColor: '#010C15',
    },
    terminal: {
      flex: 1,
      backgroundColor: '#011627',
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#1E2D3D',
    },
  },
);
