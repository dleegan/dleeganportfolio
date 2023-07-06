import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  useWindowDimensions,
  ScrollView,
} from 'react-native'
import { FontFamily } from '../../../assets/Fonts'
import Colors from '../../../assets/Styles/Colors'
import Cards from '../../../Components/Cards'
import Collapser from '../../../Components/Collapser'
import Text from '../../../Components/Text'
import ui from 'app/assets/Images/Icons/ui'

const Section2 = () => {
  const [text, onChangeText] = useState('')
  const layout = useWindowDimensions()

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{}}>
        <View
          style={[
            {
              marginHorizontal: 'auto',
              width: '100%',
              flexDirection: 'row',
              justifyContent: 'center',
              flexWrap: 'wrap',
              padding: 30,
              columnGap: 30,
              gap: 30,
            },
          ]}
        >
          {[...Array(10)].map((_item: any, _index: number) => (
            <Cards.ItemCard />
          ))}
        </View>
      </ScrollView>
    </View>
  )
}

export default Section2
