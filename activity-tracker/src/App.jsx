import { useState } from 'react'
import './App.css'
import Workout from './page/Workout'

function App() {
  const [count, setCount] = useState(0)

  return (
   <div className="App">
    <h2>Workout</h2>
    <Workout/>
   </div>
  )
}

export default App
