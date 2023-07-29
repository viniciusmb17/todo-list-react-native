import { View } from 'react-native'
import { styles } from './styles'
import { Task } from '../Task'

export function Tasks() {
  return (
    <View style={styles.container}>
      <Task />
    </View>
  )
}
