import { useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)

  // Get Employees
  ;(async () => {
    const response = await axios.get('/api/employees')
    console.log(response.data);
  })();

  return (
    <>
      <h1>API</h1>
    </>
  )
}

export default App
