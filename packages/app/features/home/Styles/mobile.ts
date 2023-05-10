import { StyleSheet } from 'react-native'
import Colors from '../../../assets/Styles/Colors'

export const mobileStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: Colors.defaultBG,
  },
  terminal: {
    flex: 1,
    backgroundColor: '#011627',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1E2D3D',
  },
})
