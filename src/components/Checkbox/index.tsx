import { Pressable } from 'react-native'
import { styles } from './styles'
import { Ionicons } from '@expo/vector-icons'

interface CheckboxProps {
  checked: boolean
  onCheck: (value: boolean) => void
}

export function Checkbox({ checked = false, onCheck }: CheckboxProps) {
  return (
    <Pressable
      style={[styles.checkboxBase, checked && styles.checkboxChecked]}
      onPress={() => onCheck(!checked)}
    >
      {checked && <Ionicons name="md-checkmark" size={13} color={'#F2F2F2'} />}
    </Pressable>
  )
}
