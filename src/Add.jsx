import React, { useState } from 'react'

const Add = () => {
    const[Add,setAdd]=useState(0)
    let increment=()=>{
        setAdd(Add+1)
    }
    let decrement=()=>{
        setAdd(Add-1)
    }
  return (
    <div className='bg-black'>number
        <h1>{Add}</h1>
    <button onClick={increment} className='p-3 w-48 h-20 bg-white'> increment</button>
    <button onClick={decrement} className='p-3 w-48 h-20 bg-white'> decrement</button>
    </div>
  )
}

export default Add