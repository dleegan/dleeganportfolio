import React, { useState } from 'react'
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
import AppTextInput from 'app/Components/TextInput'
import Buttons from 'app/Components/Buttons'

const Section2 = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const layout = useWindowDimensions()

  return (
    <View
      style={[
        layout.width >= 768 && {
          flex: 1,
          width: '42%',
          borderRightWidth: 1,
          borderRightColor: Colors.defaultBorder,
        },
      ]}
    >
      <View
        style={{
          flex: 1,
          padding: 30,
          justifyContent: 'center',
        }}
      >
        <AppTextInput
          title={'_name'}
          value={name}
          onChangeText={setName}
          placeholder="John Doe"
        />
        <AppTextInput
          title={'_email'}
          value={email}
          onChangeText={setEmail}
          containerStyle={{ marginTop: 25 }}
          placeholder="johnd@mail.com"
        />
        <AppTextInput
          title={'_message'}
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={6}
          containerStyle={{ marginTop: 25 }}
          placeholder="Hey! Just checked your website and it looks awesome!...."
        />

        <Buttons.BHover
          style={{
            alignSelf: 'flex-end',
            marginTop: 30,
            paddingVertical: 10,
            paddingHorizontal: 14,
            backgroundColor: '#1C2B3A',
            borderRadius: 8,
            alignItems: 'center',
          }}
        >
          <Text>submit-message</Text>
        </Buttons.BHover>
      </View>
    </View>
  )
}

export default Section2
