import { StyleSheet } from 'react-native'
import Colors from '../../../assets/Styles/Colors'

export const webStyles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
    borderBottomColor: Colors.defaultBorder,
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },

  iconStyle: {
    height: 15,
    width: 15,
    tintColor: '#fff',
  },
})
