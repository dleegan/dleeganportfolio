import React from 'react'

export default function Navbar() {
  return (
    <nav
      style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
      }}
    >
      <a
        href="/"
        style={{
          width: '16%',
          justifyContent: 'center',
          background: 'red',
        }}
      >
        leegan-dupros
      </a>

      <ul style={{ display: 'flex' }}>
        {React.Children.toArray(
          [
            { link: '/', title: 'Homes' },
            { link: '/about-me', title: 'About' },
            { link: '/projects', title: 'Projects' },
            { link: '/contact-me', title: 'Contact' },
          ].map((item, _index) => {
            return (
              <a href={item.link} style={{ textDecorationLine: 'none' }}>
                {item.title}
              </a>
            )
          })
        )}
      </ul>
    </nav>
  )
}
