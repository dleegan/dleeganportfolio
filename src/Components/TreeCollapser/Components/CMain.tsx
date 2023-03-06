import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import Text from '../../Text';
import Collapser from '../../Collapser';
import styles from '../styles';
import Images from '../../../Assets/Images';
import Image from '../../Image';

type Props = {
  assetTitle?: string;
  title: string;
  children?: React.ReactNode;
};

const CMain = ({data}: any) => {
  return (
    <Collapser
      childrenTitle={
        <View>
          <Image
            source={Images.chevron_right}
            style={{height: 16, width: 16, tintColor: 'white', marginRight: 5}}
          />
          <Image
            source={Images.folder}
            style={{height: 20, width: 20, tintColor: 'white', marginRight: 5}}
          />
          <Text numberOfLines={1}>{data.title}</Text>
        </View>
      }>
      {React.Children.toArray(
        data.items.map((item: any, _index: number) => {
          if (!item.items) {
            //This element is a folder
            return (
              <TouchableOpacity
                style={{paddingHorizontal: 10, flexDirection: 'row'}}>
                <Image
                  source={Images.file_code}
                  style={{
                    height: 20,
                    width: 20,
                    tintColor: 'white',
                    marginRight: 5,
                  }}
                />
                <Text>{item.title}</Text>
              </TouchableOpacity>
            );
          }

          //This element is a directory
          return <CMain data={item} />;
        }),
      )}
    </Collapser>
  );
};

export default CMain;
