import { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { Checkbox } from '../Checkbox'
import { Ionicons } from '@expo/vector-icons'

export function Task() {
  const [isChecked, setIsChecked] = useState(false)

  return (
    <View style={styles.container}>
      <View>
        <Checkbox checked={isChecked} onCheck={setIsChecked} />
      </View>
      <View style={styles.content}>
        <Text style={[styles.text, isChecked && styles.textChecked]}>
          Integer urna interdum massa libero auctor neque turpis turpis semper.
          Duis vel sed fames integer.
        </Text>
      </View>
      <TouchableOpacity>
        <Ionicons name="trash-outline" size={18} color={'#808080'} />
      </TouchableOpacity>
    </View>
  )
}
