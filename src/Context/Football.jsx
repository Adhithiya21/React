import React, { useContext } from 'react'
import themecontext from './Themecontext';
import './a.css'

const Football = () => {

    const value = useContext(themecontext);

  return (
    <div className={value.theme ==='light' ? 'light' :'dark'} style={{height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
        <h1 className='text-black'>Football</h1>
        
        <button onClick={value.changetheme}>Change</button>
    </div>
  )
}

export default Football