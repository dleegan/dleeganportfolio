import React from 'react'
import { useWindowDimensions, View } from 'react-native'
import Text from '../Text'
import Image from '../Image'
import { FontFamily } from '../../assets/Fonts'
import Colors from '../../assets/Styles/Colors'
import Images from '../../assets/Images'
import { responsiveStyle } from './Styles'
import ui from 'app/assets/Images/Icons/ui'

type Props = {
  title: string
  isSelected: boolean
}

const ItemSelection: React.FC<Props> = ({ title, isSelected }: Props) => {
  const layout = useWindowDimensions()
  const styles = responsiveStyle(layout)

  const svgg = `
<svg width="400" height="200">
  <polygon points="100 100, 180 100, 140 180" fill="black"></polygon>
  <polygon points="100 100, 180 100, 140 180" fill="red" transform="translate(0, 280), scale(1, -1)"></polygon>
</svg>
`

  return (
    <View style={styles('container')}>
      {isSelected ? (
        ui['chevron-full']('#fff', 12, 12)
      ) : (
        <View style={{ transform: [{ rotate: '-90deg' }] }}>
          {ui['chevron-full']('#fff', 12, 12)}
        </View>
      )}
      <Text style={{ marginLeft: 5 }} numberOfLines={1}>
        {title}
      </Text>
    </View>
  )
}

export default ItemSelection
