import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  useWindowDimensions,
} from 'react-native';
import {FontFamily} from '../../../Assets/Fonts';
import Colors from '../../../Assets/Styles/Colors';
import Collapser from '../../../Components/Collapser';
import Text from '../../../Components/Text';

const Section3 = () => {
  const [text, onChangeText] = useState('');
  const layout = useWindowDimensions();

  return (
    <View
      style={[layout.width >= 768 && {width: '42%'}, {backgroundColor: 'red'}]}>
      <Text>ContactMe</Text>
    </View>
  );
};

export default Section3;
