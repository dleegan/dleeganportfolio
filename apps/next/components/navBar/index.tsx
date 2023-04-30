import React from 'react'
import { Text, View } from 'react-native'

export default function Navbar() {
  return (
    // <nav
    //   style={{
    //     display: 'flex',
    //     flexDirection: 'row',
    //     alignItems: 'center',
    //   }}
    // >
    //   <a
    //     href="/"
    //     style={{
    //       width: '16%',
    //       justifyContent: 'center',
    //       background: 'red',
    //     }}
    //   >
    //     leegan-dupros
    //   </a>

    //   <ul style={{ display: 'flex' }}>
    //     {React.Children.toArray(
    //       [
    //         { link: '/', title: 'Homes' },
    //         { link: '/about-me', title: 'About' },
    //         { link: '/projects', title: 'Projects' },
    //         { link: '/contact-me', title: 'Contact' },
    //       ].map((item, _index) => {
    //         return (
    //           <a href={item.link} style={{ textDecorationLine: 'none' }}>
    //             {item.title}
    //           </a>
    //         )
    //       })
    //     )}
    //   </ul>
    // </nav>

    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomWidth: 1,
        borderColor: '#1E2D3D',
        width: '100%',
      }}
    >
      <View
        style={{
          paddingLeft: 20,
          paddingVertical: 20,
          borderRightWidth: 1,
          borderColor: '#1E2D3D',
          width: '16%',
        }}
      >
        <Text style={{ color: '#607B96' }} numberOfLines={1}>
          leegan-dupros
        </Text>
      </View>
    </View>
  )
}
