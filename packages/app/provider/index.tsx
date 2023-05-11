import { store } from 'app/Redux/store'
import { Provider as ReduxProvider } from 'react-redux'
import { Dripsy } from './dripsy'
import { Dimensions, View } from 'react-native'
import TabBar from 'app/Components/TabBar'
import Colors from 'app/assets/Styles/Colors'

export function Provider({
  children,
  location,
}: {
  children: React.ReactNode
  location: any
}) {
  return (
    <ReduxProvider store={store}>
      <Dripsy location={location}>{children}</Dripsy>
    </ReduxProvider>
  )
}
