import {
  Text,
  StyleProp,
  TextStyle,
  TextProps,
  TextInput,
  TextInputProps,
  View,
  ViewStyle,
} from 'react-native'
import React from 'react'
import { FontFamily } from '../../assets/Fonts'

type Props = {
  title: string
  value: string
  onChangeText: ((text: string) => void) | undefined
  containerStyle?: ViewStyle
}

const AppTextInput: React.FC<Props & TextInputProps> = ({
  title,
  value,
  onChangeText,
  containerStyle,
  ...props
}) => {
  return (
    <View style={[containerStyle]}>
      <Text style={{ marginBottom: 10, color: '#607B96' }}>{title}:</Text>
      <TextInput
        style={[
          FontFamily.Medium,
          {
            color: '#607B96',
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderWidth: 1,
            borderRadius: 8,
            borderColor: '#607B96',
          },
        ]}
        onChangeText={onChangeText}
        value={value}
        {...props}
      />
    </View>
  )
}

export default AppTextInput
