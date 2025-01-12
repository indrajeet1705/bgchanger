import { useState } from 'react'



function App() {
 const [color,setColor]=useState('olive') 

  return (
    
  <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
    <div className='flex flex-wrap fixed bottom-12 justify-center inset-x-0  p-6'>
      <div className=' flex flex-wrap py-2 rounded-3xl px-8  gap-12 justify-between items-center m-auto'>
     
         <button onClick={()=>setColor("#ef4444")} className='bg-red-500  p-3   text-white font-semibold rounded-2xl w-32'>Red</button>
         <button onClick={()=>setColor("#3b82f6 ")} className='bg-blue-500 p-3 text-white font-semibold rounded-2xl w-32'>Blue</button>
         <button onClick={()=>setColor(" #22c55e")} className='bg-green-500 p-3   text-white font-semibold rounded-2xl w-32'>Green</button>
         <button onClick={()=>setColor("white")} className='bg-white p-3  text-black  font-semibold rounded-2xl w-32'>White</button>
         <button onClick={()=>setColor("#a855f7")} className='bg-purple-500 p-3  text-white  font-semibold rounded-2xl w-32'>Purple</button>
         <button onClick={()=>setColor("black")} className='bg-black p-3  text-white font-semibold rounded-2xl w-32'>Black</button>
         


      </div>
    </div>
  </div>
  
   
  )
}

export default App
