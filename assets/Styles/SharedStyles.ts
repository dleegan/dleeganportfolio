import {StyleSheet} from 'react-native';
import {
  responsiveFontSize,
  responsiveHeight,
  responsiveWidth,
} from 'react-native-responsive-dimensions';

const sharedStyles = StyleSheet.create({
  navBarDefaultStyle: {
    position: 'absolute',
    bottom: 20,
    padding: 30,
    borderRadius: 15,
    alignItems: 'center',
    marginHorizontal: 15,
    backgroundColor: '#000',
  },
});

export default sharedStyles;
