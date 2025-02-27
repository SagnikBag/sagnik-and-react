import React, { useState } from 'react'

function App() {
  const [color,setColor] = useState("olive")

  return (
   <div className="w-full h-screen duration-200 ease-in-out"
   style={{backgroundColor: color}}
   >
    <div className='fixed flex flex-wrap justify-center bottom-12 insert-x-0 px-2' >
     <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl'>
      <button onClick={() => setColor("red")} className='bg-red-500 hover:bg-red-700
       text-white font-bold py-2 px-4 rounded-3xl'>Red
       </button>
       <button onClick={() => setColor("green")} className='bg-green-500 hover:bg-red-700
       text-white font-bold py-2 px-4 rounded-3xl'>green
       </button>
       <button onClick={() => setColor("yellow")} className='bg-yellow-500 hover:bg-red-700
       text-white font-bold py-2 px-4 rounded-3xl'>yellow
       </button>
       <button onClick={() => setColor("violet")} className='bg-violet-500 hover:bg-red-700
       text-white font-bold py-2 px-4 rounded-3xl'>violet
       </button>
       <button onClick={() => setColor("pink")} className='bg-pink-500 hover:bg-red-700
       text-white font-bold py-2 px-4 rounded-3xl'>pink
       </button>
       <button onClick={() => setColor("gray")} className='bg-gray-500 hover:bg-red-700
       text-white font-bold py-2 px-4 rounded-3xl'>gray
       </button>
     </div>
    </div>
   </div>
  )
}

export default App
