import React, {useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  useWindowDimensions,
  ScrollView,
} from 'react-native';
import {FontFamily} from '../../../Assets/Fonts';
import Colors from '../../../Assets/Styles/Colors';
import Cards from '../../../Components/Cards';
import Collapser from '../../../Components/Collapser';
import Text from '../../../Components/Text';

const Section2 = () => {
  const [text, onChangeText] = useState('');
  const layout = useWindowDimensions();

  return (
    <ScrollView style={{flex: 1}}>
      <View
        style={[
          {
            marginHorizontal: 'auto',
            width: '100%',
            flexDirection: 'row',
            justifyContent: 'center',
            flexWrap: 'wrap',
            padding: 30,
            columnGap: 30,
            gap: 30,
          },
        ]}>
        {[...Array(10)].map((_item: any, _index: number) => (
          <Cards.ItemCard />
        ))}
      </View>
    </ScrollView>
  );
};

export default Section2;
