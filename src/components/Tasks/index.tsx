import { FlatList } from 'react-native'
import { styles } from './styles'
import { Task } from '../Task'
import { EmptyTasks } from '../EmptyTasks'
import { useTaskContext } from '../../hooks/tasks'

export function Tasks() {
  const { tasks, setTasks } = useTaskContext()

  function handleTaskRemove(id: string) {
    setTasks((prevState) => prevState.filter((item) => item.id !== id))
  }

  return (
    <FlatList
      style={styles.container}
      data={tasks}
      renderItem={({ item }) => (
        <Task
          content={item.task}
          handleTaskRemove={() => handleTaskRemove(item.id)}
        />
      )}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={() => <EmptyTasks />}
    />
  )
}
