import React, {useRef, useState} from 'react';
import {
  Animated,
  Pressable,
  ScrollView,
  StyleProp,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import Colors from '../../Assets/Styles/Colors';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  hoverInStyles?: StyleProp<ViewStyle>;
};

const AppScrollView: React.FC<Props> = ({children}: Props) => {
  const layout = useWindowDimensions();

  const [completeScrollBarHeight, setCompleteScrollBarHeight] = useState(1);
  const [visibleScrollBarHeight, setVisibleScrollBarHeight] = useState(0);
  const scrollIndicator = useRef(new Animated.Value(0)).current;

  const scrollIndicatorSize =
    completeScrollBarHeight > visibleScrollBarHeight
      ? (visibleScrollBarHeight * visibleScrollBarHeight) /
        completeScrollBarHeight
      : 0;

  const difference =
    visibleScrollBarHeight > scrollIndicatorSize
      ? visibleScrollBarHeight - scrollIndicatorSize - 4
      : 1;

  const scrollIndicatorPosition = Animated.multiply(
    scrollIndicator,
    visibleScrollBarHeight / completeScrollBarHeight,
  ).interpolate({
    extrapolate: 'clamp',
    inputRange: [0, difference],
    outputRange: [0, difference],
  });

  const onContentSizeChange = (_w: number, contentHeight: number) =>
    setCompleteScrollBarHeight(contentHeight);

  const onLayout = ({
    nativeEvent: {
      // @ts-ignore
      layout: {height},
    },
  }) => {
    setVisibleScrollBarHeight(height);
  };

  return (
    <View style={{flex: 1, flexDirection: 'row'}}>
      <ScrollView
        style={{flex: 1, height: '100%'}}
        contentContainerStyle={{paddingRight: 5}}
        onContentSizeChange={onContentSizeChange}
        onLayout={onLayout}
        onScroll={Animated.event(
          [{nativeEvent: {contentOffset: {y: scrollIndicator}}}],
          {useNativeDriver: false},
        )}
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false}>
        {children}
      </ScrollView>
      <View
        style={{
          width: 20,
          borderColor: Colors.defaultBorder,
          borderLeftWidth: 1,
          paddingVertical: 2,
          alignItems: 'center',
        }}>
        <Animated.View
          style={[
            {
              backgroundColor: '#607B96',
              width: 15,
            },
            {
              height: scrollIndicatorSize,
              transform: [{translateY: scrollIndicatorPosition}],
            },
          ]}
        />
      </View>
    </View>
  );
};

export default AppScrollView;
