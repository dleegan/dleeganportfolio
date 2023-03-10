import React, {useState} from 'react';
import {View, TouchableOpacity, useWindowDimensions} from 'react-native';
import Images from '../../Assets/Images';
import Colors from '../../Assets/Styles/Colors';
import * as RootNavigation from '../../Utils/Functions/RootNavigation';
import AppImage from '../Image';
import MobileMenu from '../MobileMenu';
import Text from '../Text';
import {responsiveStyle} from './Styles';

let Screens = [
  {title: '_hello', screen: 'Home'},
  {title: '_about-me', screen: 'About-Me'},
  {title: '_projects', screen: 'Projects'},
];

const TopBar = () => {
  const layout = useWindowDimensions();
  const styles = responsiveStyle(layout);

  const [curntRoute, setCurntRoute] = useState<String | undefined>(undefined);
  const [modalVisible, setModalVisible] = useState(false);

  const closeModal = () => {
    setModalVisible(false);
  };

  RootNavigation.navigationRef.addListener('state', _e => {
    console.log('addListener');
    setCurntRoute(RootNavigation.getCurrentRoute()?.name);
  });

  return (
    <>
      <View style={styles('topBar-container')}>
        <View style={styles('topBar-leftTextContianer')}>
          <Text style={{color: '#607B96'}} numberOfLines={1}>
            leegan-dupros
          </Text>
        </View>

        <View style={styles('topBar-centerButtonsContianer')}>
          {React.Children.toArray(
            Screens.map((item: any, _index: number) => {
              let isCrnt = curntRoute?.includes(item.screen);
              return (
                <View style={styles('topBar-centerButtonBorder')}>
                  <TouchableOpacity
                    style={styles('topBar-centerButtonStyle')}
                    onPress={() => {
                      // @ts-ignore
                      RootNavigation.navigate(item.screen);
                    }}>
                    <Text
                      style={[isCrnt ? {color: 'white'} : {color: '#607B96'}]}>
                      {item.title}
                    </Text>
                  </TouchableOpacity>
                  {isCrnt && (
                    <View
                      style={{
                        display: 'flex',
                        position: 'absolute',
                        height: 3,
                        width: '100%',
                        backgroundColor: '#FEA55F',
                        bottom: 0,
                      }}
                    />
                  )}
                </View>
              );
            }),
          )}
        </View>

        <View style={styles('topBar-rightButtonContianer')}>
          <View
            style={[
              {
                borderLeftWidth: 1,
                borderLeftColor: Colors.defaultBorder,
              },
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
                  curntRoute?.includes('Contact-Me') && {
                    color: 'white',
                  },
                ]}>
                _contact-me
              </Text>
            </TouchableOpacity>
            {curntRoute?.includes('Contact-Me') && (
              <View
                style={{
                  display: 'flex',
                  position: 'absolute',
                  height: 3,
                  width: '100%',
                  backgroundColor: '#FEA55F',
                  bottom: 0,
                }}
              />
            )}
          </View>
        </View>

        <TouchableOpacity
          style={styles('topBar-mobileMenuButtonContianer')}
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
};

export default TopBar;
