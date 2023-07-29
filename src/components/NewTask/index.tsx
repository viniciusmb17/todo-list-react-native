import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'

export function NewTask() {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={'#808080'}
      />
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
