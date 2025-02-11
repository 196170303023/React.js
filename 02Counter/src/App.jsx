import { useState } from 'react'
import './App.css'

function App() {
  const [counter, setCounter] = useState(15)

  function addValue(){
    setCounter(counter + 1)
    if(counter >= 5){
      setCounter(5)
    }
  }

  function removeValue(){
    setCounter(counter - 1)
    if(counter <= 0){
      setCounter(0)
    }
  }

  return (
    <>
      <h1>Chai or React</h1>
      <h2>counter valur:{counter}</h2>


      <button 
      onClick={addValue}
      >add value</button>
      <br />
      <button
      onClick={removeValue}
      >remove value</button>
    </>
  )
}
export default App
