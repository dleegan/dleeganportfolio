import React, { Children, useState } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Button,
  StyleProp,
  ViewStyle,
} from 'react-native'
import Images from '../../assets/Images'
import Buttons from '../Buttons'
import Image from '../Image'
import Text from '../Text'
import styles from './styles'

type Props = {
  children?: React.ReactNode
  childrenTitle: React.ReactNode
  childrenTitleSelected?: React.ReactNode
  style?: StyleProp<ViewStyle>
  hoverInStyles?: StyleProp<ViewStyle>
}

const Collapser = ({
  children,
  childrenTitle,
  childrenTitleSelected,
  style,
  hoverInStyles,
}: Props) => {
  const [isVisible, setIsVisible] = useState(false)

  return (
    <View style={styles.tabBarContainer}>
      <Buttons.BHover
        style={[style]}
        onPress={() => {
          setIsVisible((prev) => !prev)
        }}
        hoverInStyles={[{ backgroundColor: '#1E2D3D' }, hoverInStyles]}
      >
        {isVisible && childrenTitleSelected
          ? childrenTitleSelected
          : childrenTitle}
      </Buttons.BHover>

      {isVisible && children}
    </View>
  )
}

export default Collapser
