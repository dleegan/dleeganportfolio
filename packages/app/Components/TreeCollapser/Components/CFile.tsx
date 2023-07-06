import React, { useState } from 'react'
import { View, TouchableOpacity, StyleSheet } from 'react-native'
import Text from '../../Text'
import Collapser from '../../Collapser'
import styles from '../styles'
import Images from '../../../assets/Images'
import Image from '../../Image'
import Buttons from '../../Buttons'
import { connect, useDispatch } from 'react-redux'
import { addFile } from '../../../Redux/Actions/AboutMe/filesActions'
import ui from 'app/assets/Images/Icons/ui'

type Props = {
  assetTitle?: string
  title: string
  children?: React.ReactNode
}

const CFile = (props: any) => {
  return (
    <Buttons.BHover
      style={{
        paddingHorizontal: 20,
        flexDirection: 'row',
        paddingVertical: 5,
        alignItems: 'center',
      }}
      hoverInStyles={{ backgroundColor: '#1E2D3D' }}
      onPress={() => {
        props.dispatch(addFile(props.data.fileName))
      }}
    >
      <View
        style={{
          marginRight: 5,
        }}
      >
        {ui.file('#FFF', 15, 15)}
      </View>
      <Text>{props.data.fileName}</Text>
    </Buttons.BHover>
  )
}

const mapStateToProps = (store: any, props: any) => {
  return { files: store.files }
}
export default connect(mapStateToProps)(CFile)
