import React, { useState } from 'react'
import {
  Pressable,
  StyleProp,
  TouchableOpacity,
  View,
  Image,
  ViewStyle,
} from 'react-native'
import { FontFamily } from '../../../assets/Fonts'
import Colors from '../../../assets/Styles/Colors'
import Buttons from '../../Buttons'
import Text from '../../Text'

type Props = {}

const ItemCard: React.FC<Props> = ({
  title = 'ui-animations',
  index = 1,
  image = 'https://images.unsplash.com/photo-1622737133809-d95047b9e673?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4032&q=80',
  langage,
  content,
}: any) => {
  return (
    <View>
      <Text style={{ color: '#607B96' }}>
        <Text
          style={[FontFamily.Bold, { color: '#5565E8' }]}
        >{`Project ${index} `}</Text>
        {`// _${title}`}
      </Text>
      <View
        style={{
          marginTop: 10,
          borderRadius: 8,
          borderWidth: 1,
          borderColor: Colors.defaultBorder,
          width: 370.35,
          alignItems: 'center',
        }}
      >
        <Image
          source={{ uri: image }}
          style={{
            width: '100%',
            height: 200,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
          }}
        />
        <View
          style={{
            flex: 1,
            padding: 20,
            backgroundColor: '#011221',
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
          }}
        >
          <Text numberOfLines={3} style={{ color: '#607B96', fontSize: 16 }}>
            Duis aute irure dolor in velit esse cillum dolore. Duis aute irure
            dolor in velit esse cillum dolore. Duis aute irure dolor in velit
            esse cillum dolore.
          </Text>
          <Buttons.BHover
            onPress={() => {}}
            style={{
              borderRadius: 8,
              backgroundColor: '#1C2B3A',
              paddingHorizontal: 15,
              paddingVertical: 10,
              marginTop: 20,
              alignSelf: 'flex-start',
            }}
          >
            <Text style={{ fontSize: 14 }}>view-project</Text>
          </Buttons.BHover>
        </View>
      </View>
    </View>
  )
}

export default ItemCard
