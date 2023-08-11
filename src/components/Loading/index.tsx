import { ActivityIndicator, View } from 'react-native'
import { styles } from './styles'

export function Loading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator color={'#1E6F9F'} />
    </View>
  )
}
