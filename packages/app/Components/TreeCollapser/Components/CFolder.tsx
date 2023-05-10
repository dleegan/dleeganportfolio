import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Text from '../../Text'
import Collapser from '../../Collapser'
import styles from '../styles'
import Images from '../../../assets/Images'
import Image from '../../Image'
import CFile from './CFile'

type Props = {
  assetTitle?: string
  title: string
  children?: React.ReactNode
}

const CFolder = ({ data }: any) => {
  return (
    <Collapser
      childrenTitle={
        <View style={{ flexDirection: 'row' }}>
          <Image
            source={Images.chevron_right}
            style={{
              height: 16,
              width: 16,
              tintColor: 'white',
              marginRight: 5,
            }}
          />
          <Image
            source={Images.folder}
            style={{
              height: 20,
              width: 20,
              tintColor: 'white',
              marginRight: 5,
            }}
          />
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
