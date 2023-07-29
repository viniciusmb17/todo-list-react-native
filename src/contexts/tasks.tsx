import React, { createContext, useState } from 'react'

export interface TaskType {
  id: string
  task: string
  isChecked: boolean
}

interface TaskContextTypes {
  tasks: TaskType[]
  setTasks: React.Dispatch<React.SetStateAction<TaskType[] | []>>
}

export const TaskContext = createContext({} as TaskContextTypes)

const initialState: TaskType[] | [] = [
  {
    id: '1',
    task: `Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.`,
    isChecked: false,
  },
  {
    id: '2',
    task: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Labore fugiat beatae deleniti ab in ex repellat accusantium quaerat a nisi officiis ullam, ducimus, possimus quo repudiandae magni aliquid! Deleniti, commodi.`,
    isChecked: false,
  },
  {
    id: '3',
    task: `Labore fugiat beatae deleniti ab in ex repellat accusantium quaerat a nisi officiis ullam, ducimus, possimus quo repudiandae magni aliquid! Deleniti, commodi`,
    isChecked: false,
  },
]

export function TaskContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [tasks, setTasks] = useState<TaskType[] | []>(initialState)

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  )
}
