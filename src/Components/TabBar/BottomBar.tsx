import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
  useWindowDimensions,
} from 'react-native';
import Images from '../../Assets/Images';
import Colors from '../../Assets/Styles/Colors';
import Links from '../../Utils/Links';
import Image from '../Image';
import Text from '../Text';
import {responsiveStyle} from './Styles';

let buttonsLinks = [
  {icon: Images.twitter, link: Links.twitter},
  {icon: Images.facebook, link: Links.facebook},
];

const BottomBar = () => {
  const layout = useWindowDimensions();
  const styles = responsiveStyle(layout);

  return (
    <View style={styles('bottomBar-container')}>
      <View
        style={{
          width: '16%',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text style={{color: '#607B96', padding: 20}} numberOfLines={1}>
            find me in:
          </Text>
          <View
            style={{
              flexDirection: 'row',
              borderColor: Colors.defaultBorder,
              borderRightWidth: 1,
            }}>
            {React.Children.toArray(
              buttonsLinks.map((item: any, _index: number) => {
                return (
                  <View
                    style={{
                      borderLeftWidth: 1,
                      borderColor: '#1E2D3D',
                    }}>
                    <TouchableOpacity
                      style={{
                        padding: 20,
                      }}
                      onPress={() => {
                        Linking.openURL(item.link);
                      }}>
                      <Image
                        source={item.icon}
                        style={{
                          height: 20,
                          width: 20,
                          tintColor: '#607B96',
                        }}
                      />
                    </TouchableOpacity>
                  </View>
                );
              }),
            )}
          </View>
        </View>
      </View>

      <View
        style={{
          borderLeftWidth: 1,
          borderColor: Colors.defaultBorder,
        }}>
        <TouchableOpacity
          style={{
            padding: 20,
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
