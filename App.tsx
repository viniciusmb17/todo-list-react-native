import { TaskContextProvider } from './src/contexts/tasks'
import { Home } from './src/screens/Home'

import {
  useFonts,
  Inter_400Regular,
  Inter_700Bold,
} from '@expo-google-fonts/inter'
import { Loading } from './src/components/Loading'

export default function App() {
  const [fontsLoaded] = useFonts({ Inter_400Regular, Inter_700Bold })

  return (
    <TaskContextProvider>
      {fontsLoaded ? <Home /> : <Loading />}
    </TaskContextProvider>
  )
}
