import React from 'react';
import {View, useWindowDimensions} from 'react-native';
import Card from '../../Components/Cards';
import Section1 from './Sections/Section1';
import {responsiveStyle} from './Styles';

const Projects = () => {
  const layout = useWindowDimensions();
  const styles = responsiveStyle(layout);

  return (
    <View style={styles('container')}>
      <Section1 />
      <Card.ItemCard />
      <Card.ItemCard />
    </View>
  );
};

export default Projects;
