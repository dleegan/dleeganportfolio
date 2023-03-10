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

const Section2 = () => {
  const [text, onChangeText] = useState('');
  const layout = useWindowDimensions();

  return (
    <View
      style={[
        layout.width >= 768 && {
          flex: 1,
          width: '42%',
          borderRightWidth: 1,
          borderColor: Colors.defaultBorder,
        },
      ]}>
      <Text>test</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#011627',
  },
});

export default Section2;
