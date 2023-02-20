import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import styles from './styles';

let Colors = ['red', 'yellow', 'green'];

let Screens = ['_hello', '_about-me', '_projects'];

const TabBar = () => {
  return (
    <View style={styles.tabBarContainer}>
      <View style={{flexDirection: 'row'}}>
        {React.Children.toArray(
          Colors.map((item: any, index: number) => {
            return (
              <TouchableOpacity
                style={{
                  width: 10,
                  height: 10,
                  backgroundColor: item,
                  borderRadius: 10,
                  marginRight: 6,
                }}
              />
            );
          }),
        )}
      </View>
      <View
        style={{
          paddingHorizontal: 20,
          paddingVertical: 20,
          borderRightWidth: 1,
          borderColor: '#1E2D3D',
        }}>
        <Text style={{color: '#607B96'}}>leegan-dupros</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        {React.Children.toArray(
          Screens.map((item: any, _index: number) => {
            return (
              <View
                style={{
                  paddingHorizontal: 30,
                  paddingVertical: 20,
                  borderRightWidth: 1,
                  borderColor: '#1E2D3D',
                }}>
                <Text
                  style={{
                    color: '#607B96',
                  }}>
                  {item}
                </Text>
              </View>
            );
          }),
        )}
      </View>

      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <View
          style={{
            paddingLeft: 30,
            paddingVertical: 20,
            borderLeftWidth: 1,
            borderColor: '#1E2D3D',
          }}>
          <Text
            style={{
              color: '#607B96',
            }}>
            _contact-me
          </Text>
        </View>
      </View>
    </View>
  );
};

export default TabBar;
