import { Alert, FlatList } from 'react-native'
import { styles } from './styles'
import { Task } from '../Task'
import { EmptyTasks } from '../EmptyTasks'
import { useTaskContext } from '../../hooks/tasks'

export function Tasks() {
  const { tasks, setTasks } = useTaskContext()

  function handleTaskRemove(id: string) {
    Alert.alert('Remover', 'Remover task selecionada?', [
      {
        text: 'Sim',
        onPress: () =>
          setTasks((prevState) => prevState.filter((item) => item.id !== id)),
      },
      {
        text: 'Não',
        style: 'cancel',
      },
    ])
  }

  function handleCheckTask(index: number) {
    tasks[index].isChecked = !tasks[index].isChecked
    setTasks((prevState) => [...prevState])
  }

  return (
    <FlatList
      style={styles.container}
      data={tasks}
      renderItem={({ item, index }) => (
        <Task
          item={item}
          handleTaskRemove={() => handleTaskRemove(item.id)}
          handleCheck={() => handleCheckTask(index)}
        />
      )}
      keyExtractor={(item) => item.id}
      ListEmptyComponent={() => <EmptyTasks />}
    />
  )
}
