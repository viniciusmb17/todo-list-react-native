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

export function TaskContextProvider({
  children,
}: {
  children: React.ReactNode
}) {
  const [tasks, setTasks] = useState<TaskType[] | []>([])

  return (
    <TaskContext.Provider value={{ tasks, setTasks }}>
      {children}
    </TaskContext.Provider>
  )
}
