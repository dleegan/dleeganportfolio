import { StyleSheet } from 'react-native'
import Colors from '../../../assets/Styles/Colors'

export const webStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 30,
    backgroundColor: Colors.defaultBG,
  },
  terminal: {
    flex: 1,
    backgroundColor: Colors.defaultBG,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#1E2D3D',
  },
})