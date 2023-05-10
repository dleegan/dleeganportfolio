import React, { useState } from 'react'
import { View, TouchableOpacity, useWindowDimensions } from 'react-native'
import Images from '../../assets/Images'
import Colors from '../../assets/Styles/Colors'
import AppImage from '../Image'
import MobileMenu from '../MobileMenu'
import Text from '../Text'
import { responsiveStyle } from './Styles'
import { Link } from 'solito/link'

let Screens = [
  { title: '_hello', screen: '/' },
  { title: '_about-me', screen: '/about-me' },
  { title: '_projects', screen: '/projects' },
]

const TopBar = ({ currentPathname }: { currentPathname: any }) => {
  const layout = useWindowDimensions()
  const styles = responsiveStyle(layout)

  const pathname = currentPathname

  const [modalVisible, setModalVisible] = useState(false)

  const closeModal = () => {
    setModalVisible(false)
  }

  return (
    <>
      <View style={styles('topBar-container')}>
        <View style={styles('topBar-leftTextContianer')}>
          <Text style={{ color: '#607B96' }} numberOfLines={1}>
            leegan-dupros
          </Text>
        </View>

        <View style={styles('topBar-centerButtonsContianer')}>
          {React.Children.toArray(
            Screens.map((item: any, _index: number) => {
              let isCrnt = pathname === item.screen
              return (
                <View style={styles('topBar-centerButtonBorder')}>
                  <Link href={item.screen}>
                    <View style={styles('topBar-centerButtonStyle')}>
                      <Text
                        style={[
                          isCrnt ? { color: 'white' } : { color: '#607B96' },
                        ]}
                      >
                        {item.title}
                      </Text>
                    </View>
                    {isCrnt && (
                      <View
                        style={{
                          display: 'flex',
                          position: 'absolute',
                          height: 3,
                          width: '100%',
                          backgroundColor: '#FEA55F',
                          bottom: 0,
                        }}
                      />
                    )}
                  </Link>
                </View>
              )
            })
          )}
        </View>

        <View style={styles('topBar-rightButtonContianer')}>
          <View
            style={[
              {
                borderLeftWidth: 1,
                borderLeftColor: Colors.defaultBorder,
              },
            ]}
          >
            <Link href={'/contact-me'}>
              <View
                style={{
                  padding: 20,
                }}
              >
                <Text
                  style={[
                    {
                      color: '#607B96',
                    },
                    pathname?.includes('contact-me') && {
                      color: 'white',
                    },
                  ]}
                >
                  _contact-me
                </Text>
              </View>
              {pathname?.includes('contact-me') && (
                <View
                  style={{
                    display: 'flex',
                    position: 'absolute',
                    height: 3,
                    width: '100%',
                    backgroundColor: '#FEA55F',
                    bottom: 0,
                  }}
                />
              )}
            </Link>
          </View>
        </View>

        <TouchableOpacity
          style={styles('topBar-mobileMenuButtonContianer')}
          onPress={() => {
            setModalVisible(true)
          }}
        >
          <AppImage
            source={Images.menu}
            style={{
              height: 10,
              width: 12,
            }}
          />
        </TouchableOpacity>
      </View>
      <MobileMenu visible={modalVisible} action={() => closeModal()} />
    </>
  )
}

export default TopBar
