import { useState } from 'react'
import reactLogo from './assets/react.svg'
import SetupMenu from './setupMenu'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <SetupMenu />
    </div>
  )
}

export default App
