import { Slot, Stack } from 'expo-router'
import { Text, View } from 'react-native'
import TabBar from '../src/Components/TabBar'
import { Provider } from 'react-redux'
import { store } from '../src/Redux/store'
import Colors from '../assets/Styles/Colors'

export default function Layout() {
  return (
    <Provider store={store}>
      <View style={{ flex: 1, backgroundColor: '#010C15' }}>
        <View
          style={{
            flex: 1,
            margin: 20,
            backgroundColor: Colors.defaultBG,
            borderColor: Colors.defaultBorder,
            borderWidth: 1,
            borderRadius: 8,
          }}
        >
          <TabBar.TopBar />
          <Slot />
          <TabBar.BottomBar />
        </View>
      </View>
    </Provider>
  )
}
