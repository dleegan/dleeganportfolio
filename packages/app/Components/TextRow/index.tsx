import { Text, StyleProp, TextStyle, TextProps } from 'react-native'
import React from 'react'
import { FontFamily } from '../../assets/Fonts'

type Props = {
  children?: React.ReactNode
  props?: TextProps
}

const AppText: React.FC<TextProps> = ({ children, ...props }: TextProps) => {
  return (
    <Text
      {...props}
      selectable={false}
      style={[
        {
          color: 'white',
          ...FontFamily.Regular,
        },
        props.style,
      ]}
    >
      {children}
    </Text>
  )
}

export default AppText
