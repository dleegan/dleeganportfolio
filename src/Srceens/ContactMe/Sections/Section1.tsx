import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  useWindowDimensions,
  Linking,
} from 'react-native';
import {FontFamily} from '../../../Assets/Fonts';
import Images from '../../../Assets/Images';
import Colors from '../../../Assets/Styles/Colors';
import Collapser from '../../../Components/Collapser';
import Image from '../../../Components/Image';
import Text from '../../../Components/Text';

let ContactInfo = [
  {
    icon: Images.mail,
    action: () => Linking.openURL(`mailto:leegandupros@gmail.com`),
    title: 'leegandupros@gmail.com',
  },
  {
    icon: Images.phone,
    action: () => Linking.openURL(`tel:+33767348080`),
    title: '+33767348080',
  },
];

let findMeLinks = [
  {action: '', title: 'Facebook'},
  {action: '', title: 'Instagram'},
];

const Section1 = () => {
  const [text, onChangeText] = useState('');
  const layout = useWindowDimensions();

  return (
    <View
      style={[
        layout.width >= 768 && {
          width: '16%',
          borderRightWidth: 1,
          borderRightColor: Colors.defaultBorder,
        },
      ]}>
      <Collapser
        childrenTitle={
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.defaultBorder,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={Images.triangle_right}
              style={{
                height: 15,
                width: 15,
                tintColor: '#fff',
              }}
            />
            <Text style={{marginLeft: 5}}>contacts</Text>
          </View>
        }
        childrenTitleSelected={
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.defaultBorder,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={Images.triangle_down}
              style={{
                height: 15,
                width: 15,
                tintColor: '#fff',
              }}
            />
            <Text style={{marginLeft: 5}}>contacts</Text>
          </View>
        }
        style={{}}
        hoverInStyles={{}}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: Colors.defaultBorder,
          }}>
          {React.Children.toArray(
            ContactInfo.map((item: any, _index: number) => {
              return (
                <TouchableOpacity
                  style={{flexDirection: 'row', marginTop: 10}}
                  onPress={item.action}>
                  <Image
                    source={item.icon}
                    style={{
                      height: 15,
                      width: 15,
                      tintColor: '#fff',
                    }}
                  />
                  <Text style={{marginLeft: 5}}>{item.title}</Text>
                </TouchableOpacity>
              );
            }),
          )}
        </View>
      </Collapser>

      <Collapser
        childrenTitle={
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.defaultBorder,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={Images.triangle_right}
              style={{
                height: 15,
                width: 15,
                tintColor: '#fff',
              }}
            />
            <Text style={{marginLeft: 5}}>find-me-also-in</Text>
          </View>
        }
        childrenTitleSelected={
          <View
            style={{
              borderBottomWidth: 1,
              borderBottomColor: Colors.defaultBorder,
              padding: 10,
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Image
              source={Images.triangle_down}
              style={{
                height: 15,
                width: 15,
                tintColor: '#fff',
              }}
            />
            <Text style={{marginLeft: 5}}>find-me-also-in</Text>
          </View>
        }
        style={{}}
        hoverInStyles={{}}>
        <View
          style={{
            paddingHorizontal: 10,
            paddingBottom: 10,
          }}>
          {React.Children.toArray(
            findMeLinks.map((item: any, _index: number) => {
              return (
                <TouchableOpacity style={{flexDirection: 'row', marginTop: 10}}>
                  <Image
                    source={Images.link}
                    style={{
                      height: 15,
                      width: 15,
                      tintColor: '#fff',
                    }}
                  />
                  <Text style={{marginLeft: 5}}>{item.title}</Text>
                </TouchableOpacity>
              );
            }),
          )}
        </View>
      </Collapser>
    </View>
  );
};

// const layout = useWindowDimensions();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011627',
  },
});

export default Section1;
