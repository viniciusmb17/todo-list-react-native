import { FlatList } from 'react-native'
import { styles } from './styles'
import { Task } from '../Task'
import { EmptyTasks } from '../EmptyTasks'
import { useState } from 'react'

interface initialStateType {
  id: string
  task: string
}

const initialState: initialStateType[] | [] = [
  {
    id: '1',
    task: `Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.`,
  },
  {
    id: '2',
    task: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore fugiat beatae deleniti ab in ex repellat accusantium quaerat a nisi officiis ullam, ducimus, possimus quo repudiandae magni aliquid! Deleniti, commodi.`,
  },
  {
    id: '3',
    task: `Labore fugiat beatae deleniti ab in ex repellat accusantium quaerat a nisi officiis ullam, ducimus, possimus quo repudiandae magni aliquid! Deleniti, commodi`,
  },
]

export function Tasks() {
  const [tasks, setTasks] = useState(initialState)
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
