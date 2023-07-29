import { useState } from 'react'
import { Pressable } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'

export function Checkbox() {
  const [checked, setChecked] = useState(false)
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => setChecked(!checked)}
    >
      {checked && <Ionicons name="md-checkmark" size={18} color={'#F2F2F2'} />}
    </Pressable>
  )
}
