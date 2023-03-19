import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  useWindowDimensions,
  ScrollView,
  Animated,
} from 'react-native';
import {FontFamily} from '../../../Assets/Fonts';
import Images from '../../../Assets/Images';
import Colors from '../../../Assets/Styles/Colors';
import Buttons from '../../../Components/Buttons';
import Collapser from '../../../Components/Collapser';
import Image from '../../../Components/Image';
import AppScrollView from '../../../Components/ScrollView';
import Text from '../../../Components/Text';

import Bio from '../../../Utils/Infos/bio.json';

const Section2 = () => {
  const layout = useWindowDimensions();

  return (
    <View
      style={[
        layout.width >= 768 && {
          flex: 1,
          width: '42%',
          borderRightWidth: 1,
          borderColor: Colors.defaultBorder,
        },
      ]}>
      <View>
        <ScrollView
          horizontal
          style={{
            flex: 1,
            borderColor: Colors.defaultBorder,
            borderBottomWidth: 1,
          }}>
          {React.Children.toArray(
            ['', '', '', '', '', '', '', '', '', '', '', '', '', '', ''].map(
              (item: any, _index: number) => {
                return (
                  <View
                    style={{
                      borderColor: Colors.defaultBorder,
                      borderRightWidth: 1,
                    }}>
                    <Buttons.BHover
                      style={{
                        paddingHorizontal: 20,
                        paddingVertical: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                      onPress={() => {}}
                      hoverInStyles={[{backgroundColor: '#1E2D3D'}]}>
                      <Text style={{color: Colors.VSCodeComment}}>bio.md</Text>
                      <Buttons.BHover
                        style={{
                          marginLeft: 20,
                          height: 15,
                          width: 15,
                          justifyContent: 'center',
                          alignItems: 'center',
                          borderRadius: 2,
                        }}
                        onPress={() => {}}
                        hoverInStyles={[{backgroundColor: '#1E2D3D'}]}>
                        <Image
                          source={Images.close}
                          style={{
                            height: 8,
                            width: 8,
                            tintColor: Colors.VSCodeComment,
                          }}
                        />
                      </Buttons.BHover>
                    </Buttons.BHover>
                  </View>
                );
              },
            ),
          )}
        </ScrollView>
      </View>
      <AppScrollView>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            paddingRight: 0,
          }}>
          <View style={{alignItems: 'flex-end', marginRight: 20}}>
            {[...Array(Bio.length + 2)].map((_item, index) => (
              <Text
                style={{color: Colors.VSCodeComment, fontSize: 18}}
                key={index}>
                {index + 1}
              </Text>
            ))}
          </View>
          <ScrollView
            horizontal
            style={{flex: 1, paddingBottom: layout.height * 0.8}}
            showsHorizontalScrollIndicator={false}>
            <View style={{}}>
              <Text style={{color: Colors.VSCodeComment, fontSize: 18}}>
                {'/*'}
              </Text>
              {Bio.map((item, index) => (
                <Text style={{color: Colors.VSCodeComment, fontSize: 18}}>
                  {' *  ' + item}
                </Text>
              ))}
              <Text style={{color: Colors.VSCodeComment, fontSize: 18}}>
                {' */'}
              </Text>
            </View>
          </ScrollView>
        </View>
      </AppScrollView>
    </View>
  );
};

export default Section2;
