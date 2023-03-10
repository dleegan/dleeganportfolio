import {StyleSheet} from 'react-native';
import Colors from '../../../Assets/Styles/Colors';

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
    flexDirection: 'row',
    alignItems: 'center',
    // paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#1E2D3D',
    width: '100%',
  },
});
