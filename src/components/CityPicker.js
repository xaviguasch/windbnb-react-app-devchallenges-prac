import React from 'react'

import './CityPicker.css'

const CityPicker = ({ city }) => {
  const selectCityHandler = (e) => {
    const [value] = e.target.innerText.split(',')
    console.log(value)
  }

  return (
    <div className='CityPicker'>
      <p onClick={selectCityHandler}>Helsinki, Finland</p>
      <p onClick={selectCityHandler}>Turku, Finland</p>
      <p onClick={selectCityHandler}>Oulu, Finland</p>
      <p onClick={selectCityHandler}>Vaasa, Finland</p>
    </div>
  )
}

export default CityPicker
