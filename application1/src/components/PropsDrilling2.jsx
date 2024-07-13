import React from 'react'
import PropsDrilling3 from './PropsDrilling3'

const PropsDrilling2 = ({count}) => {
  return (
    <div className='bg-orange-200'>
        <p>component2</p>
      <PropsDrilling3 count={count}/>
    </div>
  )
}

export default PropsDrilling2
