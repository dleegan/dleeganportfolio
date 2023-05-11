import { useNavigation } from '@react-navigation/native'
import React from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
  useWindowDimensions,
} from 'react-native'
import Images from '../../assets/Images'
import Links from '../../Utils/Links'
import Image from '../Image'
import Text from '../Text'
import { responsiveStyle } from './Styles'
import Facebook from 'app/assets/Images/Icons/social-media/facebook'
import Twitter from 'app/assets/Images/Icons/social-media/twitter'

let buttonsLinks = [
  {
    icon: (color: string) => <Twitter color={color} />,
    link: Links.twitter,
  },
  {
    icon: (color: string) => <Facebook color={color} />,
    link: Links.facebook,
  },
]

const BottomBar = () => {
  const layout = useWindowDimensions()
  const styles = responsiveStyle(layout)

  return (
    <View style={styles('bottomBar-container')}>
      <View style={styles('bottomBar-leftContainer')}>
        <Text
          style={{ paddingHorizontal: 20, color: '#607B96' }}
          numberOfLines={1}
        >
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
                    onPress={() => Linking.openURL(item.link)}
                  >
                    {/* <Image
                      source={item.icon}
                      style={{
                        height: 20,
                        width: 20,
                        tintColor: '#607B96',
                      }}
                    /> */}
                    {item.icon('#607B96')}
                  </TouchableOpacity>
                </View>
              )
            })
          )}
        </View>
      </View>

      <View style={styles('bottomBar-leftBorder')}>
        <TouchableOpacity
          style={{
            padding: 20,
            flexDirection: 'row',
          }}
          onPress={() => Linking.openURL(Links.github)}
        >
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
  )
}

export default BottomBar
