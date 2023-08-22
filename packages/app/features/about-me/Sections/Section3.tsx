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
  error?: boolean
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
        { path: '~/ git:(main)', cmd: text, ...result },
        ...prev,
      ])
      setTimeout(() => {
        refInput?.current && refInput?.current.focus()
      }, 100)
    }
  }

  return (
    <View
      style={[layout.width >= 768 ? { width: '42%' } : { display: 'none' }]}
    >
      <FlatList
        data={userCmd}
        renderItem={({ item }) => (
          <>
            {item.error && (
              <>
                <View
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: 3,
                    backgroundColor: '#EF8877',
                  }}
                />
                <View
                  style={{
                    position: 'absolute',
                    height: '100%',
                    width: '100%',
                    backgroundColor: '#EF8877',
                    opacity: 0.2,
                    zIndex: -10,
                  }}
                />
              </>
            )}

            <View
              style={{
                borderTopWidth: 1,
                borderColor: Colors.defaultBorder,
                padding: 10,
              }}
            >
              <Text style={{ opacity: 0.4 }}>{item.path}</Text>
              <Text style={{ marginVertical: 2 }}>{item.cmd}</Text>
              <Text>{item.result}</Text>
            </View>
          </>
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
