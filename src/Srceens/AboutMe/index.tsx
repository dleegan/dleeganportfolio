import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import Text from '../../Components/Text';
import Section1 from './Sections/Section1';
import Section2 from './Sections/Section2';
import Section3 from './Sections/Section3';
import {responsiveStyle} from './Styles';

const AboutMe = () => {
  const layout = useWindowDimensions();
  const styles = responsiveStyle(layout);

  return (
    <View style={styles('container')}>
      <Text style={styles('screenTitle')}>_about-me</Text>
      <Section1 />
      <Section2 />
      <Section3 />
    </View>
  );
};

export default AboutMe;
