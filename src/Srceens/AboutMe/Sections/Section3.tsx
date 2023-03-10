import React, {useEffect, useRef, useState} from 'react';
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
  const refInput = useRef(null);
  const layout = useWindowDimensions();

  useEffect(() => {
    refInput?.current.focus();
    console.log('useEffect');

    return () => {};
  }, [userCmd]);

  return (
    <View style={[layout.width >= 768 && {width: '42%'}, {padding: 10}]}>
      <FlatList
        data={userCmd}
        renderItem={({item}) => (
          <View>
            <Text>{item}</Text>
          </View>
        )}
        inverted
        keyExtractor={item => item}
      />
      <View style={{flexDirection: 'row'}}>
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
          value={text}
          onChangeText={onChangeText}
          // autoFocus={true}
          keyboardType="default"
          onSubmitEditing={e => {
            setUserCmd(prev => [e.nativeEvent.text, ...prev]);
            onChangeText('');
            // refInput.clear();
          }}
        />
      </View>
    </View>
  );
};

export default Section3;
