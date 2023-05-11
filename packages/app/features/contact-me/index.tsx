import React, { createContext, useState } from 'react'
import { View, useWindowDimensions } from 'react-native'
import Text from '../../Components/Text'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import Section3 from './Sections/Section3'
import { responsiveStyle } from './Styles'

const DEFAULT_CONTEXT = {
  messageInfo: { name: '', email: '', message: '' },
  setMessageInfo: (text: any) => {},
}

export const ContactContext = createContext(DEFAULT_CONTEXT)

type MessageType = {
  name: string
  email: string
  message: string
}

const ContactMe = () => {
  const layout = useWindowDimensions()
  const styles = responsiveStyle(layout)
  const [messageInfo, setMessageInfo] = useState<MessageType>({
    name: '',
    email: '',
    message: '',
  })

  return (
    <View style={styles('container')}>
      <Text style={styles('screenTitle')}>_contact-me</Text>
      <Section1 />
      <ContactContext.Provider value={{ messageInfo, setMessageInfo }}>
        <Section2 />
        <Section3 />
      </ContactContext.Provider>
    </View>
  )
}

export default ContactMe
