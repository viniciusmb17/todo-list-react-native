import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Checkbox } from '../Checkbox'
import { Ionicons } from '@expo/vector-icons'

interface TaskProps {
  content: string
}

export function Task({ content }: TaskProps) {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <View style={styles.container}>
      <Checkbox checked={isChecked} onCheck={setIsChecked} />
      <View style={styles.content}>
        <Text style={[styles.text, isChecked && styles.textChecked]}>
          {content}
        </Text>
      </View>
      <TouchableOpacity>
        <Ionicons name="trash-outline" size={18} color={'#808080'} />
      </TouchableOpacity>
    </View>
  )
}
