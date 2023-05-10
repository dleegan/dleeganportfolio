import { store } from 'app/Redux/store'
import { Provider as ReduxProvider } from 'react-redux'
import { Dripsy } from './dripsy'
import { View } from 'react-native'
import TabBar from 'app/Components/TabBar'
import Colors from 'app/assets/Styles/Colors'

export function Provider({
  children,
  location,
}: {
  children: React.ReactNode
  location: any
}) {
  console.log(location)

  return (
    <ReduxProvider store={store}>
      <View style={{ flex: 1, padding: 20, backgroundColor: '#010C15' }}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.defaultBG,
            borderRadius: 8,
            borderColor: Colors.defaultBorder,
            borderWidth: 1,
          }}
        >
          <TabBar.TopBar currentPathname={location} />
          <View style={{ flex: 1 }}>
            <Dripsy>{children}</Dripsy>
          </View>
          <TabBar.BottomBar />
        </View>
      </View>
    </ReduxProvider>
  )
}
