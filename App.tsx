import { TaskContextProvider } from './src/contexts/tasks'
import { Home } from './src/screens/Home'

export default function App() {
  return (
    <TaskContextProvider>
      <Home />
    </TaskContextProvider>
  )
}
