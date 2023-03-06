import React from 'react';
import {StyleProp, Image, ImageProps} from 'react-native';

type Props = {
  source: string;
  // style?: StyleProp<ImageProps>;
  style?: any;
};

const AppImage = ({source, style}: Props) => {
  return (
    <Image
      // @ts-ignore
      source={source}
      style={[style]}
    />
  );
};

export default AppImage;
