import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Image,
  useWindowDimensions,
} from 'react-native'
import { Font, FontFamily } from '../../assets/Fonts'
import Images from '../../assets/Images'
import Colors from '../../assets/Styles/Colors'
import AnimatedText from '../../Components/AnimatedText'
import TextLink from '../../Components/Buttons/TextLink'
import AppImage from '../../Components/Image'
import Text from '../../Components/Text'
import Links from '../../Utils/Links'
import BlurBackground from './Components/BlurBackground'
import { responsiveStyle } from './Styles'

const Home = () => {
  const [count, setCount] = useState(0)
  const initialUrl = Linking.getInitialURL()
  console.log('Home initialUrl=>', initialUrl)

  const layout = useWindowDimensions()
  const styles = responsiveStyle(layout)

  return (
    <View style={styles('container')}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <View>
          <View>
            <Text style={{ fontSize: 18, color: 'white' }}>Hello, I am</Text>
            <Text
              style={{
                fontSize: 60,
                color: 'white',
                ...FontFamily.Bold,
              }}
            >
              Leegan Dupros
            </Text>
            <AnimatedText />
          </View>
          <View style={{ marginTop: 90 }}>
            <Text
              style={{
                // fontSize: 16,
                color: '#607B96',
                ...FontFamily.BoldItalic,
              }}
            >
              // you can also see it on my Github page
            </Text>
            <Text
              style={{
                ...FontFamily.BoldItalic,
              }}
            >
              <Text
                style={{ color: Colors.VSCodeType, ...FontFamily.BoldItalic }}
              >
                const{' '}
              </Text>
              <Text
                style={{
                  color: Colors.VSCodeVariableName,
                  ...FontFamily.BoldItalic,
                }}
              >
                githubLink{' '}
              </Text>
              <Text
                style={{
                  color: Colors.VSCodeVariableName,
                  ...FontFamily.BoldItalic,
                }}
              >
                ={' '}
              </Text>
              <TextLink
                onPress={() => Linking.openURL(Links.github)}
                style={{
                  color: Colors.VSCodeValueString,
                  ...FontFamily.BoldItalic,
                }}
              >
                {`"${Links.github}"`}
              </TextLink>
            </Text>
          </View>
        </View>
      </View>
      {/*
      <View style={{ height: '100%', width: '50%', flex: 1 }}>
        <BlurBackground />
      </View>
      */}
    </View>
  )
}

export default Home
