import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Text from '../../Text';
import Collapser from '../../Collapser';
import styles from '../styles';
import Images from '../../../Assets/Images';
import Image from '../../Image';
import Buttons from '../../Buttons';

type Props = {
  assetTitle?: string;
  title: string;
  children?: React.ReactNode;
};

const CFile = ({data}: any) => {
  return (
    <Buttons.BHover
      style={{paddingHorizontal: 10, flexDirection: 'row'}}
      hoverInStyles={{backgroundColor: '#1E2D3D'}}>
      <Image
        source={Images.file_code}
        style={{
          height: 20,
          width: 20,
          tintColor: 'white',
          marginRight: 5,
        }}
      />
      <Text>{data.fileName}</Text>
    </Buttons.BHover>
  );
};

export default CFile;
