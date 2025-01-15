import React from 'react'

export const Map = () => {
    const data=[{name:"anu",age:56},
                {name:"ammu",age:55}
    ]
    console.log(data);
    
  return (
    <div>
        {data.map((item)=>(
            <div>
                <h2>{item.name}</h2>
                <h2>{item.age}</h2>
            </div>
            
        ))}
    </div>
  )
}

