import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'

export function NewTask() {
  const [isFocused, setIsFocused] = useState(false)

  return (
    <View style={styles.container}>
      <TextInput
        style={[
          styles.input,
          isFocused && { ...styles.input, borderColor: '#5E60CE' },
        ]}
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={'#808080'}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
      <TouchableOpacity style={styles.createButton}>
        <Text style={styles.createButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
