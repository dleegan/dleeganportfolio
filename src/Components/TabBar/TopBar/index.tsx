import {
  NavigationContainerRefContext,
  useNavigation,
  useNavigationContainerRef,
  useRoute,
} from '@react-navigation/native';
import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import Images from '../../../Assets/Images';
import Colors from '../../../Assets/Styles/Colors';
import * as RootNavigation from '../../../Utils/Functions/RootNavigation';
import AppImage from '../../Image';
import MobileMenu from '../../MobileMenu';
import Text from '../../Text';
import styles from '../styles';
// import * as RootNavigation from '../Utils/Functions/RootNavigation';

let Screens = [
  {title: '_hello', screen: 'Home'},
  {title: '_about-me', screen: 'About-Me'},
  {title: '_projects', screen: 'Projects'},
];

const TopBar = () => {
  const layout = useWindowDimensions();
  const [currentRoute, setCurrentRoutefirst] = useState<String>('');

  RootNavigation.navigationRef.addListener('state', e => {
    console.log('addListener');

    setCurrentRoutefirst(RootNavigation.getCurrentRoute().name);
  });

  if (layout.width < 768) {
    const [modalVisible, setModalVisible] = useState(false);

    const closeModal = () => {
      setModalVisible(false);
    };

    return (
      <>
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
          <TouchableOpacity
            onPress={() => {
              setModalVisible(true);
            }}>
            <AppImage
              source={Images.menu}
              style={{
                height: 10,
                width: 12,
              }}
            />
          </TouchableOpacity>
        </View>
        <MobileMenu visible={modalVisible} action={() => closeModal()} />
      </>
    );
  }
  console.log(currentRoute);

  return (
    <View style={styles.tabBarContainer}>
      <View
        style={{
          paddingLeft: 20,
          paddingVertical: 20,
          borderRightWidth: 1,
          borderColor: Colors.defaultBorder,
          width: '16%',
        }}>
        <Text style={{color: '#607B96'}}>leegan-dupros</Text>
      </View>

      <View style={{flexDirection: 'row'}}>
        {React.Children.toArray(
          Screens.map((item: any, _index: number) => {
            return (
              <View
                style={[
                  {
                    borderRightWidth: 1,
                    borderColor: Colors.defaultBorder,
                  },
                  // currentRoute?.includes(item.screen) && {
                  //   borderBottomWidth: 3,
                  //   borderBottomColor: '#FEA55F',
                  // },
                ]}>
                <TouchableOpacity
                  style={{paddingHorizontal: 30, paddingVertical: 20}}
                  onPress={() => {
                    // @ts-ignore
                    RootNavigation.navigate(item.screen);
                  }}>
                  <Text
                    style={[
                      {
                        color: '#607B96',
                      },
                      currentRoute?.includes(item.screen) && {
                        color: 'white',
                      },
                    ]}>
                    {item.title}
                  </Text>
                </TouchableOpacity>
              </View>
            );
          }),
        )}
      </View>

      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <View
          style={[
            {
              borderLeftWidth: 1,
              borderLeftColor: Colors.defaultBorder,
            },
            // currentRoute?.includes('Contact-Me') && {
            //   borderBottomWidth: 3,
            //   borderBottomColor: '#FEA55F',
            // },
          ]}>
          <TouchableOpacity
            style={{
              padding: 20,
            }}
            onPress={() => {
              // @ts-ignore
              RootNavigation.navigate('Contact-Me');
            }}>
            <Text
              style={[
                {
                  color: '#607B96',
                },
                currentRoute?.includes('Contact-Me') && {
                  color: 'white',
                },
              ]}>
              _contact-me
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default TopBar;
