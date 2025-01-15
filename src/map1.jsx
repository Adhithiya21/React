import React from 'react'

const Map1 = () => {
    const arr=[
        {
            task:"html",status:"completed"},
          {  task:"css",status:"completed"
        }
    ]
  return (
    <div>
        {arr.map((item)=>(
            <div>
             <h2>{item.task}</h2>
             <h2>{item.status}</h2>

        </div>
        ))

        }
   
</div>

  )
}

export default Map1