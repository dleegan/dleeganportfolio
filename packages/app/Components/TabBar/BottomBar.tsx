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
      <View style={styles('bottomBar-leftContainer')}>
        <Text
          style={{paddingHorizontal: 20, color: '#607B96'}}
          numberOfLines={1}>
          find me in:
        </Text>
        <View style={styles('bottomBar-leftIconContent')}>
          {React.Children.toArray(
            buttonsLinks.map((item: any, _index: number) => {
              return (
                <View style={styles('bottomBar-leftBorder')}>
                  <TouchableOpacity
                    style={{
                      padding: 20,
                    }}
                    onPress={() => Linking.openURL(item.link)}>
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

      <View style={styles('bottomBar-leftBorder')}>
        <TouchableOpacity
          style={{
            padding: 20,
            flexDirection: 'row',
          }}
          onPress={() => Linking.openURL(Links.github)}>
          <Text style={styles('bottomBar-leftText')}>@dleegan</Text>
          <Image
            source={Images.github}
            style={{
              height: 20,
              width: 20,
              tintColor: '#607B96',
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BottomBar;