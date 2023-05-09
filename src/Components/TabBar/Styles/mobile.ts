import { StyleSheet } from 'react-native'
import Colors from '../../../../assets/Styles/Colors'

export const mobileStyles = StyleSheet.create({
  //***********//
  //  TopBar  //
  //**********//

  //all
  ['topBar-container']: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    borderBottomWidth: 1,
    borderColor: Colors.defaultBorder,
  },

  //Left
  ['topBar-leftTextContianer']: {
    paddingLeft: 0,
    paddingVertical: 0,
    borderRightWidth: 0,
    width: 'auto',
  },

  //Center
  ['topBar-centerButtonsContianer']: {
    display: 'none',
  },
  ['topBar-centerButtonStyle']: {},
  ['topBar-centerButtonBorder']: {
    borderRightWidth: 0,
  },

  //Right
  ['topBar-rightButtonContianer']: {
    display: 'none',
  },

  //Mobile
  ['topBar-mobileMenuButtonContianer']: {
    display: 'flex',
  },

  //**************//
  //  BottomBar  //
  //*************//

  //all
  ['bottomBar-container']: {
    borderTopWidth: 1,
    borderTopColor: Colors.defaultBorder,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },

  ['bottomBar-leftContainer']: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 'auto',
  },

  ['bottomBar-leftContent']: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },

  ['bottomBar-leftIconContent']: {
    flexDirection: 'row',
    borderRightWidth: 0,
  },

  ['bottomBar-leftBorder']: {
    borderLeftWidth: 1,
    borderColor: Colors.defaultBorder,
  },

  ['bottomBar-leftText']: {
    display: 'none',
  },
})
