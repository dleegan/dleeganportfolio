import React, {useCallback, useEffect, useRef, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  useWindowDimensions,
  ScrollView,
  Platform,
  FlatList,
} from 'react-native';
import {FontFamily} from '../../../Assets/Fonts';
import Colors from '../../../Assets/Styles/Colors';
import Collapser from '../../../Components/Collapser';
import Text from '../../../Components/Text';

const Section3 = () => {
  const [text, onChangeText] = useState<string>('');
  const [userCmd, setUserCmd] = useState<string[]>([]);
  const refInput = useRef<TextInput>(null);
  const layout = useWindowDimensions();

  const keyPressEvent = async (e: any) => {
    if (e.key === 'Enter' && text) {
      onChangeText('');
      setUserCmd(prev => [text, ...prev]);
      setTimeout(() => {
        refInput?.current && refInput?.current.focus();
      }, 100);
    }
  };

  return (
    <View style={[layout.width >= 768 && {width: '42%'}]}>
      <FlatList
        data={userCmd}
        renderItem={({item}) => (
          <View
            style={{
              borderTopWidth: 1,
              borderColor: Colors.defaultBorder,
              padding: 10,
            }}>
            <Text>{item}</Text>
          </View>
        )}
        inverted
        keyExtractor={item => `item-${Math.random()}`}
      />
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          borderTopWidth: 1,
          borderColor: Colors.defaultBorder,
        }}>
        <Text>~/ git:(main)</Text>
        <TextInput
          ref={refInput}
          style={[
            FontFamily.Medium,
            {
              flex: 1,
              color: '#607B96',
              width: 'auto',
              marginLeft: 10,
              outlineWidth: 0,
            },
          ]}
          autoFocus={true}
          value={text}
          onChangeText={onChangeText}
          keyboardType="default"
          onKeyPress={keyPressEvent}
        />
      </View>
    </View>
  );
};

export default Section3;
