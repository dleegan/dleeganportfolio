import React, { useContext, useState } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  useWindowDimensions,
} from 'react-native'
import { FontFamily } from '../../../assets/Fonts'
import Colors from '../../../assets/Styles/Colors'
import Collapser from '../../../Components/Collapser'
import Text from '../../../Components/Text'
import { ContactContext } from '..'

const Section3 = () => {
  const [text, onChangeText] = useState('')
  const layout = useWindowDimensions()

  let { messageInfo } = useContext(ContactContext)

  return (
    <View style={[layout.width >= 768 && { width: '42%' }]}>
      <View
        style={{
          flex: 1,
          padding: 30,
          justifyContent: 'center',
        }}
      >
        <Text>name: {messageInfo?.name}</Text>
        <Text>email: {messageInfo?.email}</Text>
        <Text>message: {messageInfo?.message}</Text>
      </View>
    </View>
  )
}

export default Section3
