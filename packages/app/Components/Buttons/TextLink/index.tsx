import React, {Children, useState} from 'react';
import {Pressable, StyleProp, TextStyle, TextProps} from 'react-native';
import Text from '../../Text';

type Props = {
  onPress?: any;
  children?: React.ReactNode;
  style?: StyleProp<TextStyle>;
  props?: TextProps;
};

const TextLink: React.FC<Props> = ({
  children,
  onPress,
  style,
  ...props
}: Props) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <Pressable
      onPress={onPress}
      onHoverIn={() => {
        setIsVisible(prev => !prev);
      }}
      onHoverOut={() => {
        setIsVisible(prev => !prev);
      }}>
      <Text
        style={[isVisible && {textDecorationLine: 'underline'}, style]}
        {...props}>
        {children}
      </Text>
    </Pressable>
  );
};

export default TextLink;
