import { useState } from 'react'
import './App.css'
import Card from './components/Card.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-green-800 p-3 rounded-xl mb-4'>tailwind test</h1>
      <Card username ="Coffee aur code" btnText="click kr"/>
      <Card username ="chai aur code" btnText="dba de"/>
      <Card username ="viskey aur code" />

    </>
  )
}

export default App
