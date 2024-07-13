import React, { useState } from 'react'
import PropsDrilling2 from './PropsDrilling2'

const PropsDrilling1 = () => {
  const[count,setcount] = useState(0);
  return (
    <div className='bg-slate-300'>
      <h1 className='text-center text-2xl underline'>Props Drilling</h1>
      <p>component1</p>
      <p>for accessing count in component3 we need to pass it to its child component which is component2/PropsDrilling2 and from component3/PropsDrilling3</p>
      <PropsDrilling2 count={count}/>


      <p>FOR DIRECTLY ACCESSING COUNT IN ANY SUB COMPONENT USE : useContext or redux</p>
    </div>
  )
}

export default PropsDrilling1
