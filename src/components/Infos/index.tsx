import { Text, View } from 'react-native'
import { styles } from './sytles'

export function Infos() {
  return (
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
  )
}
