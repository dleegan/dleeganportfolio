// RootNavigation.js

import {createNavigationContainerRef} from '@react-navigation/native';

export const navigationRef = createNavigationContainerRef();

export function navigate(name: never, params: never) {
  if (navigationRef.isReady()) {
    navigationRef.navigate(name, params);
  }
}

export function getCurrentRoute() {
  if (navigationRef.isReady()) {
    return navigationRef.getCurrentRoute();
  }
}
