import { Image, View } from 'react-native'
import { styles } from './styles'

export function Header() {
  return (
    <View style={styles.container}>
      <Image
        source={require('../../assets/todo-logo.png')}
        alt="logo"
        style={{ width: 110.345, height: 32 }}
      />
    </View>
  )
}
