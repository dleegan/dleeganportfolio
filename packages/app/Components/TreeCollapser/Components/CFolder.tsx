import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Text from '../../Text'
import Collapser from '../../Collapser'
import styles from '../styles'
import Images from '../../../assets/Images'
import Image from '../../Image'
import CFile from './CFile'
import ui from 'app/assets/Images/Icons/ui'

type Props = {
  assetTitle?: string
  title: string
  children?: React.ReactNode
}

const CFolder = ({ data }: any) => {
  return (
    <Collapser
      childrenTitle={
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}
        >
          <View style={{ marginRight: 5 }}>
            {ui['chevron-right']('#fff', 12, 12)}
          </View>
          <View style={{ marginRight: 5 }}>{ui.folder('#fff', 15, 15)}</View>

          <Text numberOfLines={1}>{data.folderName}</Text>
        </View>
      }
      childrenTitleSelected={
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 10,
          }}
        >
          <View style={{ marginRight: 5, transform: [{ rotate: '90deg' }] }}>
            {ui['chevron-right']('#fff', 12, 12)}
          </View>
          <View style={{ marginRight: 5 }}>{ui.folder('#fff', 15, 15)}</View>

          <Text numberOfLines={1}>{data.folderName}</Text>
        </View>
      }
    >
      {React.Children.toArray(
        data.content.map((item: any, _index: number) => {
          // if (item.content) {
          //   //This element is a Folder
          //   return <CFolder data={item.content} />;
          // }

          //This element is a File
          return <CFile data={item} />
        })
      )}
    </Collapser>
  )
}

export default CFolder
