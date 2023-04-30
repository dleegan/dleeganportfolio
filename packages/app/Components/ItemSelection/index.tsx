import React from 'react'
import { useWindowDimensions, View } from 'react-native'
import Text from '../Text'
import Image from '../Image'
import { FontFamily } from '../../Assets/Fonts'
import Colors from '../../Assets/Styles/Colors'
import Images from '../../Assets/Images'
import { responsiveStyle } from './Styles'

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
      {/* {isSelected ? (
        <ChevronDoubleDownIcon size={15} color={'#FFFFFF'} />
      ) : (
        <ChevronDoubleRightIcon size={15} color={'#FFFFFF'} />
      )} */}
      {/* <SvgXml xml={svgg} /> */}
      <Text style={{ marginLeft: 5 }} numberOfLines={1}>
        {title}
      </Text>
    </View>
  )
}

export default ItemSelection
