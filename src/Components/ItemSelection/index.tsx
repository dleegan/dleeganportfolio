import React from 'react';
import {useWindowDimensions, View} from 'react-native';
import Text from '../Text';
import Image from '../Image';
import {FontFamily} from '../../Assets/Fonts';
import Colors from '../../Assets/Styles/Colors';
import Images from '../../Assets/Images';
import {responsiveStyle} from './Styles';

type Props = {
  title: string;
  isSelected: boolean;
};

const ItemSelection: React.FC<Props> = ({title, isSelected}: Props) => {
  const layout = useWindowDimensions();
  const styles = responsiveStyle(layout);

  return (
    <View style={styles('container')}>
      <Image
        source={isSelected ? Images.triangle_down : Images.triangle_right}
        style={styles('iconStyle')}
      />
      <Text style={{marginLeft: 5}}>{title}</Text>
    </View>
  );
};

export default ItemSelection;
