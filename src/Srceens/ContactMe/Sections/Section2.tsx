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
          alignSelf: 'center',
          width: '42%',
        },
      ]}>
      <View style={{flex: 1, padding: 30, alignContent: 'center'}}>
        <View>
          <Text style={{marginBottom: 10, color: '#607B96'}}>_name:</Text>
          <TextInput
            style={[
              FontFamily.Medium,
              {
                color: '#607B96',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderWidth: 1,
                borderRadius: 8,
                borderColor: '#607B96',
              },
            ]}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <View style={{marginTop: 25}}>
          <Text style={{marginBottom: 10, color: '#607B96'}}>_email:</Text>
          <TextInput
            style={[
              FontFamily.Medium,
              {
                color: '#607B96',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderWidth: 1,
                borderRadius: 8,
                borderColor: '#607B96',
              },
            ]}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
        <View style={{marginTop: 25}}>
          <Text style={{marginBottom: 10, color: '#607B96'}}>_message:</Text>
          <TextInput
            multiline
            numberOfLines={6}
            style={[
              FontFamily.Medium,
              {
                color: '#607B96',
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderWidth: 1,
                borderRadius: 8,
                borderColor: '#607B96',
              },
            ]}
            onChangeText={onChangeText}
            value={text}
          />
        </View>
      </View>
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