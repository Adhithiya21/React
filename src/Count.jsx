import React, { useState } from 'react'

export const Count = () => {
const[count,setcount]=useState(0)
let increment=()=>{
    setcount(count+1)
}
let decrement=()=>{
    setcount(count-1)
}

  return (
    <div>
        <h2>{count}</h2>
        <button onClick={increment}>inccrement</button>
        <button onClick={decrement}>decrement</button>
    </div>
  )
}
