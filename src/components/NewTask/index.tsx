import { Text, TextInput, TouchableOpacity, View, Alert } from 'react-native'
import { styles } from './styles'
import { useState } from 'react'
import { useTaskContext } from '../../hooks/tasks'
import uuid from 'react-native-uuid'

export function NewTask() {
  const { setTasks } = useTaskContext()
  const [isFocused, setIsFocused] = useState(false)
  const [field, setField] = useState('')

  function handleNewTask() {
    if (field.trim() === '') {
      return Alert.alert(
        'Tarefa inválida',
        'Não é possível adicionar tarefa vazia',
      )
    }

    const id = uuid.v4().toString()
    setTasks((prevState) => [...prevState, { id, task: field }])
    setField('')
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
        value={field}
        onChangeText={setField}
      />
      <TouchableOpacity style={styles.createButton} onPress={handleNewTask}>
        <Text style={styles.createButtonText}>+</Text>
      </TouchableOpacity>
    </View>
  )
}
