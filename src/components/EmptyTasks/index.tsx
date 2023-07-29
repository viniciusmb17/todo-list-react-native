import { Text, View } from 'react-native'
import { styles } from './styles'

export function EmptyTasks() {
  return (
    <View style={styles.container}>
      <Text>Nenhuma task encontrada.</Text>
    </View>
  )
}
