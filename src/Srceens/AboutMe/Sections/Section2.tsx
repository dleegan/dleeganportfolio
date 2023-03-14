import React, {useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  useWindowDimensions,
  ScrollView,
  Animated,
} from 'react-native';
import {FontFamily} from '../../../Assets/Fonts';
import Colors from '../../../Assets/Styles/Colors';
import Collapser from '../../../Components/Collapser';
import AppScrollView from '../../../Components/ScrollView';
import Text from '../../../Components/Text';

import Bio from '../../../Utils/Infos/bio.json';

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
          flexDirection: 'row',
          // padding: 20,
        },
      ]}>
      <AppScrollView>
        <View
          style={{
            flexDirection: 'row',
            padding: 20,
            paddingRight: 0,
          }}>
          <View style={{alignItems: 'flex-end', marginRight: 20}}>
            {[...Array(Bio.length + 2)].map((_item, index) => (
              <Text
                style={{color: Colors.VSCodeComment, fontSize: 18}}
                key={index}>
                {index + 1}
              </Text>
            ))}
          </View>
          <ScrollView
            horizontal
            style={{flex: 1, paddingBottom: layout.height * 0.8}}
            showsHorizontalScrollIndicator={false}>
            <View style={{}}>
              <Text style={{color: Colors.VSCodeComment, fontSize: 18}}>
                {'/*'}
              </Text>
              {Bio.map((item, index) => (
                <Text style={{color: Colors.VSCodeComment, fontSize: 18}}>
                  {' *  ' + item}
                </Text>
              ))}
              <Text style={{color: Colors.VSCodeComment, fontSize: 18}}>
                {' */'}
              </Text>
            </View>
          </ScrollView>
        </View>
      </AppScrollView>
    </View>
  );
};

export default Section2;
