import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Checkbox } from '../Checkbox'
import { Ionicons } from '@expo/vector-icons'

interface TaskProps {
  content: string
  handleTaskRemove: () => void
}

export function Task({ content, handleTaskRemove }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => setIsChecked(!isChecked)}
    >
      <Checkbox checked={isChecked} onCheck={setIsChecked} />
      <View style={styles.content}>
        <Text style={[styles.text, isChecked && styles.textChecked]}>
          {content}
        </Text>
      </View>
      <TouchableOpacity onPress={handleTaskRemove}>
        <Ionicons name="trash-outline" size={18} color={'#808080'} />
      </TouchableOpacity>
    </TouchableOpacity>
  )
}
