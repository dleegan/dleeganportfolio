import { useRouter } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'

export default function Test() {
  const router = useRouter()

  return (
    <View style={styles.container}>
      <Text
        onPress={() => {
          // Go back to the previous screen using the imperative API.
          router.back()
        }}
      >
        This is a test
      </Text>

      <StatusBar style="auto" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
})
