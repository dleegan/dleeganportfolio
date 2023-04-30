import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Home from '../../features/home'

const Stack = createNativeStackNavigator<{
  home: undefined
}>()

export function NativeNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="home"
        component={Home}
        options={{
          title: 'Home',
        }}
      />
    </Stack.Navigator>
  )
}
