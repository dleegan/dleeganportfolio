import TabBar from 'app/Components/TabBar'
import { DripsyProvider, makeTheme } from 'dripsy'
import { View, useWindowDimensions } from 'react-native'

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
      <TabBar.TopBar currentPathname={location} />
      <View style={{ flex: 1 }}>{children}</View>
      <TabBar.BottomBar />
    </DripsyProvider>
  )
}
