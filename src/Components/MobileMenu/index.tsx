import {
  StyleProp,
  View,
  Modal,
  ModalProps,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {FontFamily} from '../../Assets/Fonts';
import Text from '../Text';
import Colors from '../../Assets/Styles/Colors';
import Images from '../../Assets/Images';
import Image from '../Image';
import {useNavigation} from '@react-navigation/native';

type Props = {
  action: Function;
  visible: boolean;
};

let Screens = [
  {title: '_hello', screen: 'Home'},
  {title: '_about-me', screen: 'About-Me'},
  {title: '_projects', screen: 'Projects'},
  {title: '_contact-me', screen: 'Contact-Me'},
];

const MobileMenu: React.FC<Props> = ({action, visible}: Props) => {
  // const navigation = useNavigation();

  return (
    <Modal animationType="none" transparent={false} visible={visible}>
      <View style={{flex: 1, padding: 10, backgroundColor: '#010C15'}}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.defaultBG,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: Colors.defaultBorder,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 20,
              borderBottomWidth: 1,
              borderColor: '#1E2D3D',
            }}>
            <Text style={{color: '#607B96'}}>leegan-dupros</Text>
            <TouchableOpacity onPress={() => action()}>
              <Image
                source={Images.close}
                style={{
                  height: 12,
                  width: 12,
                }}
              />
            </TouchableOpacity>
          </View>

          <View>
            {React.Children.toArray(
              Screens.map((item: any, _index: number) => {
                return (
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderColor: '#1E2D3D',
                    }}>
                    <TouchableOpacity
                      onPress={() => {
                        // @ts-ignore
                        // navigation.navigate(item.screen);
                        action();
                      }}>
                      <Text
                        style={{
                          padding: 20,
                        }}>
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                );
              }),
            )}
          </View>

          <View style={{flex: 1, justifyContent: 'flex-end'}}>
            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: Colors.defaultBorder,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Text
                style={{paddingHorizontal: 20, color: '#607B96'}}
                numberOfLines={1}>
                find me in:
              </Text>
              <View style={{flexDirection: 'row'}}>
                {React.Children.toArray(
                  [Images.twitter, Images.facebook, Images.github].map(
                    (item: any, _index: number) => {
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
                            onPress={() => {}}>
                            <Image
                              source={item}
                              style={{
                                height: 20,
                                width: 20,
                                tintColor: '#607B96',
                              }}
                            />
                          </TouchableOpacity>
                        </View>
                      );
                    },
                  ),
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default MobileMenu;
