// Based on https://github.com/zeit/next.js/tree/canary/examples/with-react-native-web
// and https://github.com/expo/expo-cli/blob/main/packages/webpack-config/web-default/index.html
import NextDocument, { Head, Html, Main, NextScript } from 'next/document'
import * as React from 'react'
import { AppRegistry, Modal, View } from 'react-native'
import Navbar from '../components/navBar'

export const style = `
/**
 * Building on the RNWeb reset:
 * https://github.com/necolas/react-native-web/blob/master/packages/react-native-web/src/exports/StyleSheet/initialRules.js
 */
html, body, #__next {
  width: 100%;
  /* To smooth any scrolling behavior */
  -webkit-overflow-scrolling: touch;
  /* Allows content to fill the viewport and go beyond the bottom */
  min-height: 100%;
  margin: 0px;
  padding: 0px;
}
#__next {
  flex-shrink: 0;
  flex-basis: auto;
  flex-direction: column;
  flex-grow: 1;
  display: flex;
  flex: 1;
}
html {
  scroll-behavior: smooth;
  /* Prevent text size change on orientation change https://gist.github.com/tfausak/2222823#file-ios-8-web-app-html-L138 */
  -webkit-text-size-adjust: 100%;
  height: 100%;
  background-color: #010C15;
}
body {
  display: flex;
  flex-direction: column;
  height: 100%;
  /* Allows you to scroll below the viewport; default value is visible */
  overflow-y: hidden;
  overscroll-behavior-y: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  -ms-overflow-style: scrollbar;
  background-color: #010C15;
}
`

export async function getInitialProps({ renderPage }) {
  AppRegistry.registerComponent('Main', () => Main)
  const { getStyleElement } = AppRegistry.getApplication('Main')
  const page = await renderPage()
  const styles = [
    <style key="style-reset" dangerouslySetInnerHTML={{ __html: style }} />,
    getStyleElement(),
  ]
  return {
    ...page,
    styles: React.Children.toArray(styles),
  }
}

export class Document extends NextDocument {
  render() {
    return (
      <Html>
        <Head>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
        </Head>
        <body>
          {/* <div
            style={{
              margin: 20,
              backgroundColor: '#011627',
              height: '100%',
            }}
          >
            <div
              style={{
                height: '100%',
                borderRadius: 8,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#1E2D3D',
              }}
            > */}
          <View
            style={{
              flex: 1,
              // margin: 20,
              backgroundColor: '#010C15',
              padding: 20,
              height: '100%',
            }}
          >
            <View
              style={{
                height: '100%',
                borderRadius: 8,
                borderWidth: 1,
                borderStyle: 'solid',
                borderColor: '#1E2D3D',
                backgroundColor: '#011627',
              }}
            >
              <Navbar />
              <Main />
              <NextScript />
            </View>
          </View>
          {/* </div>
          </div> */}
        </body>
      </Html>
    )
  }
}

Document.getInitialProps = getInitialProps

export default Document
