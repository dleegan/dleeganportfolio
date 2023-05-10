import Colors from 'app/assets/Styles/Colors'
import { StyleSheet } from 'react-native'

export const mobileStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.defaultBG,
    flexDirection: 'column',
  },
  screenTitle: {
    opacity: 1,
    padding: 20,
    fontSize: 14,
  },
})
