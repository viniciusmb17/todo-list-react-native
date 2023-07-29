import { Text, View } from 'react-native'
import { Header } from '../../components/Header'
import { NewTask } from '../../components/NewTask'
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <NewTask />
      <View style={styles.infos}>
        <View style={styles.infoContainer}>
          <Text style={styles.createdInfoText}>Criadas</Text>
          <View style={styles.counter}>
            <Text style={styles.counterText}>0</Text>
          </View>
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.completedInfoText}>Concluídas</Text>
          <View style={styles.counter}>
            <Text style={styles.counterText}>0</Text>
          </View>
        </View>
      </View>
    </View>
  )
}
