import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Checkbox } from '../Checkbox'
import { Ionicons } from '@expo/vector-icons'
import { TaskType } from '../../contexts/tasks'

interface TaskProps {
  item: TaskType
  handleTaskRemove: () => void
  handleCheck: () => void
}

export function Task({ item, handleCheck, handleTaskRemove }: TaskProps) {
  return (
    <TouchableOpacity style={styles.container} onPress={handleCheck}>
      <Checkbox checked={item.isChecked} onCheck={handleCheck} />
      <View style={styles.content}>
        <Text style={[styles.text, item.isChecked && styles.textChecked]}>
          {item.task}
        </Text>
      </View>
      <TouchableOpacity onPress={handleTaskRemove}>
        <Ionicons name="trash-outline" size={18} color={'#808080'} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}
