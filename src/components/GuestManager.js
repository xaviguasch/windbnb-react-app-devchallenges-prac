import React from 'react'

import './GuestManager.css'

const GuestManager = ({
  numAdult,
  numChildren,
  addChildren,
  subtractChildren,
  addAdults,
  subtractAdults,
}) => {
  const subtractAdultHandler = () => {
    subtractAdults()
  }

  const addAdultHandler = () => {
    addAdults()
  }

  const subtractChildrenHandler = () => {
    subtractChildren()
  }

  const addChildrenHandler = () => {
    addChildren()
  }

  return (
    <div className='GuestManager'>
      <div className='guest-picker'>
        <p>Adults</p>
        <p>Ages 13 or above</p>
        <div className='picker'>
          <button onClick={subtractAdultHandler}>-</button>
          <span>{numAdult}</span>
          <button onClick={addAdultHandler}>+</button>
        </div>
      </div>

      <div className='guest-picker'>
        <p>Adults</p>
        <p>Ages 13 or above</p>
        <div className='picker'>
          <button onClick={subtractChildrenHandler}>-</button>
          <span>{numChildren}</span>
          <button onClick={addChildrenHandler}>+</button>
        </div>
      </div>
    </div>
  )
}

export default GuestManager
