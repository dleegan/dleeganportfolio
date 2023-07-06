import {
  StyleProp,
  View,
  Modal,
  ModalProps,
  TouchableOpacity,
  Linking,
} from 'react-native'
import React from 'react'
import { FontFamily } from '../../assets/Fonts'
import Text from '../Text'
import Colors from '../../assets/Styles/Colors'
import Images from '../../assets/Images'
import Image from '../Image'
import { useRouter } from 'solito/router'
import Links from 'app/Utils/Links'
import socialMedia from 'app/assets/Images/Icons/social-media'
import ui from 'app/assets/Images/Icons/ui'

type Props = {
  action: Function
  visible: boolean
}

let Screens = [
  { title: '_hello', screen: '/' },
  { title: '_about-me', screen: '/about-me' },
  { title: '_projects', screen: '/projects' },
  { title: '_contact-me', screen: '/contact-me' },
]

let buttonsLinks = [
  {
    icon: (color: string) => socialMedia.twitter(color),
    link: Links.twitter,
  },
  {
    icon: (color: string) => socialMedia.facebook(color),
    link: Links.facebook,
  },
  {
    icon: (color: string) => socialMedia.github(color),
    link: Links.github,
  },
]

const MobileMenu: React.FC<Props> = ({ action, visible }: Props) => {
  const { push } = useRouter()

  return (
    <Modal animationType="none" transparent={false} visible={visible}>
      <View style={{ flex: 1, padding: 20, backgroundColor: '#010C15' }}>
        <View
          style={{
            flex: 1,
            backgroundColor: Colors.defaultBG,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: Colors.defaultBorder,
          }}
        >
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: 20,
              borderBottomWidth: 1,
              borderColor: '#1E2D3D',
            }}
          >
            <Text style={{ color: '#607B96' }}>leegan-dupros</Text>
            <TouchableOpacity onPress={() => action()}>
              {ui.close('red', 12, 12)}
            </TouchableOpacity>
          </View>

          <View>
            {React.Children.toArray(
              Screens.map((item: any, _index: number) => {
                return (
                  <View
                    style={{
                      borderBottomWidth: 1,
                      borderColor: '#1E2D3D',
                    }}
                  >
                    <TouchableOpacity
                      onPress={() => {
                        push(item.screen)
                        action()
                      }}
                    >
                      <Text
                        style={{
                          padding: 20,
                        }}
                      >
                        {item.title}
                      </Text>
                    </TouchableOpacity>
                  </View>
                )
              })
            )}
          </View>

          <View style={{ flex: 1, justifyContent: 'flex-end' }}>
            <View
              style={{
                borderTopWidth: 1,
                borderTopColor: Colors.defaultBorder,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}
            >
              <Text
                style={{ paddingHorizontal: 20, color: '#607B96' }}
                numberOfLines={1}
              >
                find me in:
              </Text>
              <View style={{ flexDirection: 'row' }}>
                {React.Children.toArray(
                  buttonsLinks.map((item: any, _index: number) => {
                    return (
                      <View
                        style={{
                          borderLeftWidth: 1,
                          borderColor: '#1E2D3D',
                        }}
                      >
                        <TouchableOpacity
                          style={{
                            padding: 20,
                          }}
                          onPress={() => Linking.openURL(item.link)}
                        >
                          {item.icon('#607B96')}
                        </TouchableOpacity>
                      </View>
                    )
                  })
                )}
              </View>
            </View>
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default MobileMenu
