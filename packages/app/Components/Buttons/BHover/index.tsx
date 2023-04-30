import React, {useState} from 'react';
import {Pressable, StyleProp, ViewStyle} from 'react-native';

type Props = {
  onPress?: any;
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  hoverInStyles?: StyleProp<ViewStyle>;
};

const BHover: React.FC<Props> = ({
  children,
  onPress,
  style,
  hoverInStyles,
}: Props) => {
  const [isHover, setIsHover] = useState(false);
  const [isPress, setIsPress] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => {
        setIsHover(true);
      }}
      onHoverOut={() => {
        setIsHover(false);
      }}
      onPressIn={() => {
        setIsPress(true);
      }}
      onPressOut={() => {
        setIsPress(false);
      }}
      style={[style, isHover && hoverInStyles, isPress && {opacity: 0.2}]}>
      {children}
    </Pressable>
  );
};

export default BHover;
