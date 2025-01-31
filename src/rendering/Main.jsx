import React from 'react'
import Logged from './Logged';
import Notlogged from './Notlogged';

const Main = () => {
    let log=true;
  return (
    <div>
{log ? <Logged></Logged>  :<Notlogged></Notlogged>}
    </div>
  )
}

export default Main