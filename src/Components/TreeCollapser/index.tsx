import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import CFolder from './Components/CFolder';
import CFile from './Components/CFile';

type Props = {
  assetTitle?: string;
  title: string;
  children?: React.ReactNode;
};

const TreeCollapser = ({data}: any) => {
  return (
    <View>
      {React.Children.toArray(
        data.map((item: any, _index: number) => {
          if (item.content) {
            //This element is a Folder
            return <CFolder data={item} />;
          }

          //This element is a File
          return <CFile data={item} />;
        }),
      )}
    </View>
  );
};

export default TreeCollapser;
