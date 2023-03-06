import React, {useState} from 'react';
import {View, TouchableOpacity, StyleSheet, Linking} from 'react-native';
import {Font, FontFamily} from '../../Assets/Fonts';
import Colors from '../../Assets/Styles/Colors';
import TextLink from '../../Components/Buttons/TextLink';
import TabBar from '../../Components/TabBar/TopBar';
import Text from '../../Components/Text';
import Links from '../../Utils/Links';

const Home = () => {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          alignContent: 'center',
        }}>
        <View>
          <Text style={{fontSize: 18, color: 'white'}}>Hello, I am</Text>
          <Text
            style={{
              fontSize: 60,
              color: 'white',
              ...FontFamily.Bold,
            }}>
            Leegan Dupros
          </Text>
          <Text style={{fontSize: 30, color: 'white', ...FontFamily.Medium}}>
            {'>'} Mobile developper
          </Text>
        </View>
        <View>
          <Text
            style={{fontSize: 16, color: '#607B96', ...FontFamily.BoldItalic}}>
            // you can also see it on my Github page
          </Text>
          <Text style={{fontSize: 16, ...FontFamily.BoldItalic}}>
            <Text style={{color: Colors.VSCodeType, ...FontFamily.BoldItalic}}>
              const{' '}
            </Text>
            <Text
              style={{
                color: Colors.VSCodeVariableName,
                ...FontFamily.BoldItalic,
              }}>
              githubLink{' '}
            </Text>
            <Text
              style={{
                color: Colors.VSCodeVariableName,
                ...FontFamily.BoldItalic,
              }}>
              ={' '}
            </Text>
            <TextLink
              onPress={() => Linking.openURL(Links.github)}
              style={{
                color: Colors.VSCodeValueString,
                ...FontFamily.BoldItalic,
              }}>
              {`"${Links.github}"`}
            </TextLink>
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#011627',
  },
});

export default Home;
