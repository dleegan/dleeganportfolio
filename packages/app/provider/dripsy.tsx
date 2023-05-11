import TabBar from 'app/Components/TabBar'
import Colors from 'app/assets/Styles/Colors'
import { DripsyProvider, makeTheme } from 'dripsy'
import { Dimensions, View, useWindowDimensions } from 'react-native'

const theme = makeTheme({
  // https://www.dripsy.xyz/usage/theming/create
  text: {
    p: {
      fontSize: 16,
    },
  },
})

export function Dripsy({
  children,
  location,
}: {
  children: React.ReactNode
  location: any
}) {
  return (
    <DripsyProvider
      theme={theme}
      // this disables SSR, since react-native-web doesn't have support for it (yet)
      ssr
    >
      <View
        style={{
          flex: 1,
          padding: 20,
          backgroundColor: '#010C15',
          maxHeight: Dimensions.get('window').height,
        }}
      >
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
          <View style={{ flex: 1 }}>{children}</View>
          <TabBar.BottomBar />
        </View>
      </View>
    </DripsyProvider>
  )
}
