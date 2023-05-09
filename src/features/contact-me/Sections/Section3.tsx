import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  useWindowDimensions,
} from 'react-native'
import { FontFamily } from '../../../../assets/Fonts'
import Colors from '../../../../assets/Styles/Colors'
import Collapser from '../../../Components/Collapser'
import Text from '../../../Components/Text'

const Section3 = () => {
  const [text, onChangeText] = useState('')
  const layout = useWindowDimensions()
  const hrefAttrs = { download: true, rel: 'nofollow', target: 'blank' }

  return (
    <View style={[layout.width >= 768 && { width: '42%' }]}>
      <Text>ContactMsse</Text>
    </View>
  )
}

// const layout = useWindowDimensions();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011627',
    // flexDirection: layout.width >= 768 ? 'row' : 'column',
  },
})

export default Section3
