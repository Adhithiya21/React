import React from 'react'
import Admin from './Admin'
import Guest from './Guest'
import Rser from './User'

const Mmain = ({role}) => {
  return (

      <div>
      {role === "admin" && <Admin />}
      {role === "guest" && <Guest />}
      {role !== "admin" && role !== "guest" && <Rser/>}
    </div>


    
  )
}

export default Mmain