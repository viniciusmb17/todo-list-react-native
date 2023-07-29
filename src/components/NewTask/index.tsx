import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'
import { useTaskContext } from '../../hooks/tasks'

export function NewTask() {
  const { setTasks } = useTaskContext()
  const [isFocused, setIsFocused] = useState(false)

  function handleNewTask() {
    setTasks((prevState) => [...prevState, { id: '123', task: 'Teste' }])
  }

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
      <TouchableOpacity style={styles.createButton} onPress={handleNewTask}>
        <Text style={styles.createButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
