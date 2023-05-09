import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  useWindowDimensions,
  Linking,
} from 'react-native'
import { FontFamily } from '../../../../assets/Fonts'
import Images from '../../../../assets/Images'
import Colors from '../../../../assets/Styles/Colors'
import Collapser from '../../../Components/Collapser'
import Image from '../../../Components/Image'
import ItemSelection from '../../../Components/ItemSelection'
import Text from '../../../Components/Text'

const Section1 = () => {
  const [text, onChangeText] = useState('')
  const layout = useWindowDimensions()

  return (
    <View
      style={[
        layout.width >= 768 && {
          width: '16%',
          borderRightWidth: 1,
          borderRightColor: Colors.defaultBorder,
        },
      ]}
    >
      <Collapser
        childrenTitle={<ItemSelection title={'projects'} isSelected={false} />}
        childrenTitleSelected={
          <ItemSelection title={'projects'} isSelected={true} />
        }
        style={{}}
        hoverInStyles={{}}
      >
        <View
          style={{
            paddingHorizontal: 10,
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: Colors.defaultBorder,
          }}
        ></View>
      </Collapser>
    </View>
  )
}

// const layout = useWindowDimensions();

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011627',
  },
})

export default Section1
