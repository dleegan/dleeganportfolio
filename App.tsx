import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import NavigationRoot from './src/Navigation';
import CreateResponsiveStyle from './src/Utils/Functions/ResponsiveStyles';
import {Provider} from 'react-redux';
import {store} from './src/Redux/store';

const App = () => {
  const layout = useWindowDimensions();
  const styles = responsiveStyle(layout);

  return (
    <Provider store={store}>
      <View style={styles('container')}>
        <View style={styles('terminal')}>
          <NavigationRoot />
        </View>
      </View>
    </Provider>
  );
};

export default App;

const responsiveStyle = CreateResponsiveStyle(
  {
    container: {
      flex: 1,
      padding: 20,
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
