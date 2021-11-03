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
        <p className='gp__text'>Adults</p>
        <p className='gp__text gp__text--greyed'>Ages 13 or above</p>
        <div className='picker'>
          <button className='btn--gm-picker' onClick={subtractAdultHandler}>
            &#8722;
          </button>
          <span className='gp__num'>{numAdult}</span>
          <button className='btn--gm-picker' onClick={addAdultHandler}>
            &#43;
          </button>
        </div>
      </div>

      <div className='guest-picker'>
        <p className='gp__text'>Adults</p>
        <p className='gp__text gp__text--greyed'>Ages 13 or above</p>
        <div className='picker'>
          <button className='btn--gm-picker' onClick={subtractChildrenHandler}>
            &#8722;
          </button>
          <span className='gp__num'>{numChildren}</span>
          <button className='btn--gm-picker' onClick={addChildrenHandler}>
            &#43;
          </button>
        </div>
      </div>
    </div>
  )
}

export default GuestManager
