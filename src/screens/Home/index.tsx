import { View } from 'react-native'
import { Header, NewTask, Infos, Tasks } from '../../components'
import { styles } from './styles'

export function Home() {
  return (
    <View style={styles.container}>
      <Header />
      <NewTask />
      <Infos />
      <Tasks />
    </View>
  )
}
