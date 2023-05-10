import { Dimensions, ScaledSize, StyleProp, StyleSheet } from 'react-native'

export default function CreateResponsiveStyle<T, U extends Partial<T>>(
  webStyles: StyleSheet.NamedStyles<T>,
  mobileStyles: StyleSheet.NamedStyles<U>
) {
  const web = StyleSheet.create<StyleSheet.NamedStyles<T>>(webStyles)
  const mobile = StyleSheet.create<StyleSheet.NamedStyles<U>>(mobileStyles)

  // Return a function that combines wraps web and mobile styles
  return (layout: ScaledSize) =>
    (style: keyof T): StyleProp<any> => {
      let dime = Dimensions.get('window')
      console.log('layout=>', layout, dime)

      if (dime.width < 768 && mobile.hasOwnProperty(style)) {
        return StyleSheet.compose(web[style], mobile[style])
      } else return web[style]
    }
}
