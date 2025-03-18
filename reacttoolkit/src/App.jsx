// import { useState } from 'react'
// import React from 'react';
// import './App.css'
// import AddTodo from './components/AddTodo'
// import Todos from './components/Todos'

// function App() {
  

//   return (
//     <>
//       <h1>React tool kit</h1>
//       <AddTodo/>
//       <Todos/>
//     </>
//   )
// }

// export default App
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'

function App() {
  
  return (
    <>
      <h1>Learn about redux toolkit</h1>
      <AddTodo />
      <Todos />
    </>
  )
}

export default App
