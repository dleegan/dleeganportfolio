import React, {useEffect, useState} from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Linking,
  Animated,
} from 'react-native';
import Images from '../../../../Assets/Images';

const BlurBackground = () => {
  let animatedGreen_bg = new Animated.Value(0);
  let animatedBlue_bg = new Animated.Value(0);

  useEffect(() => {
    Animated.loop(
      Animated.parallel([
        Animated.timing(animatedGreen_bg, {
          toValue: 1,
          duration: 30000,
          useNativeDriver: false,
        }),
        Animated.timing(animatedBlue_bg, {
          toValue: 1,
          duration: 30000,
          useNativeDriver: false,
        }),
      ]),
    ).start();
    return () => {};
  }, []);

  return (
    <View style={{height: '100%', width: '100%', justifyContent: 'center'}}>
      <Animated.Image
        // @ts-ignore
        source={Images.green_bg}
        style={[
          {
            height: '80%',
            width: '80%',
            transform: [
              {
                rotate: animatedGreen_bg.interpolate({
                  inputRange: [0, 1],
                  outputRange: ['0deg', '360deg'],
                }),
              },
            ],
          },
        ]}
      />
      <Animated.Image
        // @ts-ignore
        source={Images.blue_bg}
        style={{
          height: '80%',
          width: '80%',
          position: 'absolute',
          alignSelf: 'flex-end',
          justifyContent: 'flex-end',
          transform: [
            {
              rotate: animatedBlue_bg.interpolate({
                inputRange: [0, 1],
                outputRange: ['0deg', '180deg'],
              }),
            },
          ],
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: '#011627',
    flexDirection: 'row',
  },
});

export default BlurBackground;
