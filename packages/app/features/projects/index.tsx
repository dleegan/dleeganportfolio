import React from 'react'
import { View, useWindowDimensions } from 'react-native'
import Text from '../../Components/Text'
import Section1 from './Sections/Section1'
import Section2 from './Sections/Section2'
import { responsiveStyle } from './Styles'

const Projects = () => {
  const layout = useWindowDimensions()
  const styles = responsiveStyle(layout)

  return (
    <View style={styles('container')}>
      <Text style={styles('screenTitle')}>_projects</Text>
      <Section1 />

      <View
        style={{
          flex: 1,
          alignSelf: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            textAlign: 'center',
          }}
        >
          De nouveaux projets arrivent très bientôt...
        </Text>
      </View>
      {/* <Section2 /> */}
    </View>
  )
}

export default Projects
