import React, { useState } from 'react'
import { Animated, Pressable, StyleProp, ViewStyle } from 'react-native'

type Props = {
  onPress?: any
  children?: React.ReactNode
  style?: StyleProp<ViewStyle>
  hoverInStyles?: StyleProp<ViewStyle>
}

const BHover: React.FC<Props> = ({
  children,
  onPress,
  style,
  hoverInStyles,
}: Props) => {
  const [isHover, setIsHover] = useState(false)
  const [isPress, setIsPress] = useState(false)
  let pressableOpacity = new Animated.Value(1)

  const doAnimation = () => {
    Animated.sequence([
      Animated.timing(pressableOpacity, {
        toValue: 0,
        duration: 100,
        useNativeDriver: true,
      }),
      Animated.timing(pressableOpacity, {
        toValue: 1,
        duration: 100,
        useNativeDriver: true,
      }),
    ]).start(() => {})
  }

  return (
    <Pressable
      onPress={() => {
        doAnimation()
        onPress && onPress()
      }}
      onHoverIn={() => {
        setIsHover(true)
      }}
      onHoverOut={() => {
        setIsHover(false)
      }}
      onPressIn={() => {
        setIsPress(true)
      }}
      onPressOut={() => {
        setIsPress(false)
      }}
    >
      <Animated.View
        style={[
          {
            opacity: pressableOpacity.interpolate({
              inputRange: [0, 1],
              outputRange: [0, 1],
            }),
          },
          style,
          isHover && hoverInStyles,
        ]}
      >
        {children}
      </Animated.View>
    </Pressable>
  )
}

export default BHover
