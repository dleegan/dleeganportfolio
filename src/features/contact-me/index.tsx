import React from 'react'
import { View, useWindowDimensions } from 'react-native'
import Text from '../../Components/Text'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import { responsiveStyle } from './Styles'

const ContactMe = () => {
  const layout = useWindowDimensions()
  const styles = responsiveStyle(layout)

  return (
    <View style={styles('container')}>
      <Text style={styles('screenTitle')}>_contact-me</Text>
      <Section1 />
      <Section2 />
      <Section3 />
    </View>
  )
}

export default ContactMe
