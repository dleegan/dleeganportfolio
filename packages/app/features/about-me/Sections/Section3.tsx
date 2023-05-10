import React, { useCallback, useEffect, useRef, useState } from 'react'
import {
  View,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Modal,
  useWindowDimensions,
  ScrollView,
  Platform,
  FlatList,
} from 'react-native'
import { FontFamily } from '../../../assets/Fonts'
import Colors from '../../../assets/Styles/Colors'
import Collapser from '../../../Components/Collapser'
import Text from '../../../Components/Text'
import { commandesInterpretor } from '../../../Utils/Functions/TermCommands'

type CommandeResult = {
  path: string
  cmd: string
  result: string
}

const Section3 = () => {
  const [text, onChangeText] = useState<string>('')
  const [userCmd, setUserCmd] = useState<CommandeResult[]>([])
  const refInput = useRef<TextInput>(null)
  const layout = useWindowDimensions()

  const keyPressEvent = async (e: any) => {
    if (e.key === 'Enter' && text) {
      onChangeText('')
      let result = commandesInterpretor(text)
      setUserCmd((prev) => [
        { path: '~/ git:(main)', cmd: text, result: result },
        ...prev,
      ])
      setTimeout(() => {
        refInput?.current && refInput?.current.focus()
      }, 100)
    }
  }

  return (
    <View style={[layout.width >= 768 && { width: '42%' }]}>
      <FlatList
        data={userCmd}
        renderItem={({ item }) => (
          <View
            style={{
              borderTopWidth: 1,
              borderColor: Colors.defaultBorder,
              padding: 10,
            }}
          >
            <Text>{item.path}</Text>
            <Text>{item.cmd}</Text>
            <Text>{item.result}</Text>
          </View>
        )}
        inverted
        keyExtractor={(_item) => `item-${Math.random()}`}
      />
      <View
        style={{
          flexDirection: 'row',
          padding: 10,
          borderTopWidth: 1,
          borderColor: Colors.defaultBorder,
        }}
      >
        <Text>~/ git:(main)</Text>
        <TextInput
          ref={refInput}
          style={[
            FontFamily.Medium,
            {
              flex: 1,
              color: '#607B96',
              width: 'auto',
              marginLeft: 10,
              //@ts-ignore
              outlineWidth: 0,
            },
          ]}
          autoFocus={true}
          value={text}
          onChangeText={onChangeText}
          keyboardType="default"
          onKeyPress={keyPressEvent}
        />
      </View>
    </View>
  )
}

export default Section3
