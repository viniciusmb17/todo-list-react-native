import { useContext } from 'react'
import { TaskContext } from '../contexts/tasks'

export const useTaskContext = () => {
  return useContext(TaskContext)
}
