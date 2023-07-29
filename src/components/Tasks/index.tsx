import { FlatList } from 'react-native'
import { styles } from './styles'
import { Task } from '../Task'
import { EmptyTasks } from '../EmptyTasks'

interface DataType {
  id: number
  task: string
}

const DATA: DataType[] | [] = [
  {
    id: 1,
    task: `Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.`,
  },
  {
    id: 2,
    task: `Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.`,
  },
  {
    id: 3,
    task: `Integer urna interdum massa libero auctor neque turpis turpis semper.`,
  },
]

export function Tasks() {
  return (
    <FlatList
      style={styles.container}
      data={DATA}
      renderItem={({ item }) => <Task content={item.task} />}
      keyExtractor={(item) => item.id.toString()}
      ListEmptyComponent={() => <EmptyTasks />}
    />
  )
}
