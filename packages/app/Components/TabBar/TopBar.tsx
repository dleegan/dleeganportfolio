import React, { useState } from 'react'
import {
  View,
  TouchableOpacity,
  useWindowDimensions,
  Dimensions,
} from 'react-native'
import Images from '../../assets/Images'
import Colors from '../../assets/Styles/Colors'
import * as RootNavigation from '../../Utils/Functions/RootNavigation'
import AppImage from '../Image'
import MobileMenu from '../MobileMenu'
import Text from '../Text'
import { responsiveStyle } from './Styles'
import { Link } from 'solito/link'
import { useRouter } from 'solito/router'
import { useLink } from 'solito/link'
let Screens = [
  { title: '_hello', screen: '/' },
  { title: '_about-me', screen: '/about-me' },
  { title: '_projects', screen: '/projects' },
]

const TopBar = () => {
  const layout = useWindowDimensions()
  console.log('Dimensions:>', Dimensions.get('window'))
  console.log('layout:>', layout)
  const styles = responsiveStyle(layout)

  // const pathname = usePathname()
  // const route = useRouter()

  // const linkProps = useLink({
  //   href,
  //   as,
  //   shallow,
  //   replace
  // })

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
              // let isCrnt = pathname === item.screen
              let isCrnt = true
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
            <View
              style={{
                padding: 20,
              }}
            >
              <Link href={'/contact-me'}>
                <Text
                  style={[
                    {
                      color: '#607B96',
                    },
                    // pathname?.includes('contact-me') && {
                    //   color: 'white',
                    // },
                  ]}
                >
                  _contact-me
                </Text>
              </Link>
            </View>
            {/* {pathname?.includes('contact-me') && (
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
            )} */}
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
