import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

let [counter,setCounter]= useState(20)

 // let counter = 50//
  const addValue =()=>{
  // counter = counter+2;
    if (counter <20) {
      setCounter(counter+1)
    }
    // setCounter(counter+2)
    
    
  }
  const removeValue =()=>{
    // counter = counter-2;
    if (counter > 0) {
      setCounter(counter-1);
    
    }
    // setCounter(counter-2);
    
  }
  
  return (
    <>
     <h1>chai aur react</h1>
     
     <h2>counter value: {counter}</h2>
     <button
     onClick={addValue}>add value{counter}</button>
     <br />
     <button
     onClick={removeValue}>remove value{counter}</button>

    
    </>
  )
}

export default App
