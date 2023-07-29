import { View } from 'react-native'
import { Header } from '../../components/Header'
import { NewTask } from '../../components/NewTask'
import { styles } from './styles'
import { Infos } from '../../components/Infos'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <NewTask />
      <Infos />
    </View>
  )
}
