import React, { Children, useEffect, useRef, useState } from 'react'
import { Animated, Keyboard, Text, TouchableOpacity, View } from 'react-native'
import { FontFamily } from '../../assets/Fonts'

const AnimatedText = ({
  data = ['Mobile Developer', 'Music Producer', '3D Artist'],
  letterAnimationDelay = 150,
  cursorAnimationDelay = 350,
}) => {
  const [index, setIndex] = useState(0)
  const [title, setTitle] = useState(data[index])
  let cursorOpacity = new Animated.Value(1)

  let lettersOpacity = Array.from(
    { length: title.length },
    () => new Animated.Value(0)
  )

  useEffect(() => {
    makeAnimation(title)
    return () => {}
  }, [title])

  const getAnimation = (value: any, toValue: number, duration: number) => {
    return Animated.timing(value, {
      toValue: toValue,
      duration: duration,
      useNativeDriver: true,
    })
  }

  const makeAnimation = (word: any) => {
    let animLettersOnArray: any = [
      ...Array.from({ length: word.length }, (_v, k) =>
        getAnimation(lettersOpacity[k], 1, letterAnimationDelay)
      ),
    ]

    let animLettersOffArray: any = [
      ...Array.from({ length: word.length }, (_v, k) =>
        getAnimation(lettersOpacity[k], 0, letterAnimationDelay)
      ),
    ].reverse()

    let animCursorArray: any = [
      ...Array.from({ length: 9 }, (_v, k) =>
        getAnimation(cursorOpacity, (k + 1) % 2, cursorAnimationDelay)
      ),
    ]

    Animated.sequence([
      ...animLettersOnArray,
      ...animCursorArray,
      ...animLettersOffArray,
      ...animCursorArray,
    ]).start(() => {
      let newIndex = index + 1
      if (newIndex === data.length) newIndex = 0
      setIndex(newIndex)
      setTitle(data[newIndex])
    })
  }

  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <Text
        allowFontScaling={false}
        style={{ color: 'white', fontSize: 30, ...FontFamily.Medium }}
      >
        {'> '}
      </Text>
      {title.split('').map((letter, index) => {
        if (lettersOpacity[index])
          return (
            <Animated.Text
              key={index}
              allowFontScaling={false}
              style={{
                color: 'white',
                ...FontFamily.Medium,
                fontSize: lettersOpacity[index].interpolate({
                  inputRange: [0, 0.9, 1],
                  outputRange: [0, 0, 30],
                }),
                opacity: lettersOpacity[index].interpolate({
                  inputRange: [0, 0.9, 1],
                  outputRange: [0, 0, 1],
                }),
              }}
            >
              {letter}
            </Animated.Text>
          )
        return
      })}
      <Animated.View
        style={{
          height: '80%',
          width: 8,
          backgroundColor: 'white',
          marginLeft: 4,
          opacity: cursorOpacity.interpolate({
            inputRange: [0, 1],
            outputRange: [0, 1],
          }),
        }}
      />
    </View>
  )
}

export default AnimatedText

// 2000
