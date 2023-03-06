import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {View, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import Images from '../../../Assets/Images';
import Links from '../../../Utils/Links';
import Image from '../../Image';
import Text from '../../Text';
import styles from './../styles';

let Screens = [
  {title: Images.twitter, screen: 'Home'},
  {title: Images.facebook, screen: 'About-Me'},
];

const BottomBar = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.bottomtabBarContainer}>
      <View
        style={{
          paddingRight: 20,
          paddingVertical: 20,
          borderRightWidth: 1,
          borderColor: '#1E2D3D',
        }}>
        <Text style={{color: '#607B96'}}>Find me in:</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        {React.Children.toArray(
          Screens.map((item: any, _index: number) => {
            return (
              <TouchableOpacity
                style={{
                  paddingHorizontal: 30,
                  paddingVertical: 20,
                  borderRightWidth: 1,
                  borderColor: '#1E2D3D',
                }}
                onPress={() => {
                  // @ts-ignore
                  navigation.navigate(item.screen);
                }}>
                <Image
                  source={item.title}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: '#607B96',
                  }}
                />
              </TouchableOpacity>
            );
          }),
        )}
      </View>

      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <TouchableOpacity
          style={{
            paddingLeft: 30,
            paddingVertical: 20,
            borderLeftWidth: 1,
            borderColor: '#1E2D3D',
            flexDirection: 'row',
          }}
          onPress={() => {
            // @ts-ignore
            Linking.openURL(Links.github);
          }}>
          <Text
            style={{
              color: '#607B96',
            }}>
            @dleegan
          </Text>
          <Image
            source={Images.github}
            style={{
              height: 20,
              width: 20,
              tintColor: '#607B96',
              marginLeft: 5,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;
