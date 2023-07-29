import { Text, View } from 'react-native'
import { styles } from './sytles'
import { useTaskContext } from '../../hooks/tasks'

export function Infos() {
  const { tasks } = useTaskContext()

  const completedTasks = tasks.filter((item) => item.isChecked)
  return (
    <View style={styles.infos}>
      <View style={styles.infoContainer}>
        <Text style={styles.createdInfoText}>Criadas</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{tasks.length}</Text>
        </View>
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.completedInfoText}>Concluídas</Text>
        <View style={styles.counter}>
          <Text style={styles.counterText}>{completedTasks.length}</Text>
        </View>
      </View>
    </View>
  )
}
