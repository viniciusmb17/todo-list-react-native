import { Text, View, Image } from 'react-native'
import { styles } from './styles'

// TODO: EmptyTasks component
export function EmptyTasks() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../../assets/clipboard.png')}
        alt="clipboard icon"
      />
      <View>
        <Text style={[styles.text, { fontWeight: 'bold' }]}>
          Você ainda não tem tarefas cadastradas
        </Text>
        <Text style={styles.text}>
          Crie tarefas e organize seus itens a fazer
        </Text>
      </View>
    </View>
  )
}
