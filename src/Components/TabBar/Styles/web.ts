import {StyleSheet} from 'react-native';
import Colors from '../../../Assets/Styles/Colors';

export const webStyles = StyleSheet.create({
  //***********//
  //  TopBar  //
  //**********//

  //all
  ['topBar-container']: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderColor: '#1E2D3D',
    width: '100%',
  },

  //Left
  ['topBar-leftTextContianer']: {
    paddingLeft: 20,
    paddingVertical: 20,
    borderRightWidth: 1,
    borderColor: Colors.defaultBorder,
    width: '16%',
  },

  //Center
  ['topBar-centerButtonsContianer']: {
    flexDirection: 'row',
  },
  ['topBar-centerButtonStyle']: {
    paddingHorizontal: 30,
    paddingVertical: 20,
  },
  ['topBar-centerButtonBorder']: {
    borderRightWidth: 1,
    borderColor: Colors.defaultBorder,
  },

  //Right
  ['topBar-rightButtonContianer']: {
    flex: 1,
    alignItems: 'flex-end',
  },

  //Mobile
  ['topBar-mobileMenuButtonContianer']: {
    display: 'none',
  },

  //**************//
  //  BottomBar  //
  //*************//

  //all
  ['bottomBar-container']: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    // paddingHorizontal: 20,
    borderTopWidth: 1,
    borderColor: '#1E2D3D',
    // width: '100%',
  },
});
