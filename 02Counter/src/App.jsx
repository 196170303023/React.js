import { useState } from 'react'
import './App.css'

function App() {

  let [counter, setcounter] = useState(0)
    if(counter < 0){
      setcounter(0)
    }else if(counter > 20){
      setcounter(20)
    }
  function addValue(){
    setcounter(counter++)
  } 
  function removeValue(){
    setcounter(counter--)
  } 
  return (
    <>
      <h1>Coffee or Code</h1>
      <h2>Cunter Value {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
