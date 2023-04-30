import React from 'react'
import { StyleProp, Image, ImageProps, Animated } from 'react-native'

type Props = {
  source: string
  // style?: StyleProp<ImageProps>;
  style?: any
  animated?: boolean
}

const AppImage = ({ source, style, animated = false }: Props) => {
  if (animated)
    return (
      <Animated.Image
        // @ts-ignore
        source={source}
        style={[style]}
      />
    )

  return (
    <Image
      // @ts-ignore
      source={source}
      style={[style]}
    />
  )
}

export default AppImage
