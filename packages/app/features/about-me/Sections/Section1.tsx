import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  useWindowDimensions,
  Linking,
} from 'react-native'
import Images from '../../../assets/Images'
import Colors from '../../../assets/Styles/Colors'
import Collapser from '../../../Components/Collapser'
import Image from '../../../Components/Image'
import ItemSelection from '../../../Components/ItemSelection'
import Text from '../../../Components/Text'
import TreeCollapser from '../../../Components/TreeCollapser'
import Links from '../../../Utils/Links'
import ui from 'app/assets/Images/Icons/ui'
import { DataSchema } from 'app/Utils/Infos/InfosFiles'

let findMeLinks = [
  {
    action: () => Linking.openURL(Links.facebook),
    title: 'Facebook',
  },
  {
    action: () => Linking.openURL(Links.instagram),
    title: 'Instagram',
  },
]

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
        childrenTitle={
          <ItemSelection title={'personal-info'} isSelected={false} />
        }
        childrenTitleSelected={
          <ItemSelection title={'personal-info'} isSelected={true} />
        }
        style={{}}
        hoverInStyles={{}}
      >
        <View
          style={{
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: Colors.defaultBorder,
          }}
        >
          <TreeCollapser data={DataSchema} />
        </View>
      </Collapser>

      <Collapser
        childrenTitle={
          <ItemSelection title={'find-me-also-in'} isSelected={false} />
        }
        childrenTitleSelected={
          <ItemSelection title={'find-me-also-in'} isSelected={true} />
        }
        style={{}}
        hoverInStyles={{}}
      >
        <View
          style={{
            paddingHorizontal: 20,
            paddingBottom: 10,
          }}
        >
          {React.Children.toArray(
            findMeLinks.map((item: any, _index: number) => {
              return (
                <TouchableOpacity
                  style={{
                    flexDirection: 'row',
                    marginTop: 10,
                    alignItems: 'center',
                  }}
                  onPress={() => item.action()}
                >
                  {ui.link('#fff', 15, 14)}
                  <Text style={{ marginLeft: 5 }}>{item.title}</Text>
                </TouchableOpacity>
              )
            })
          )}
        </View>
      </Collapser>
    </View>
  )
}

export default Section1
