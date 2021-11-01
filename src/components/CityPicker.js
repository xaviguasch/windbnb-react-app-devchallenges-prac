import React from 'react'

import './CityPicker.css'

const CityPicker = ({ selectCity }) => {
  const selectCityHandler = (e) => {
    const [value] = e.target.innerText.split(',')
    const selectedCity = value.slice(5)

    selectCity(selectedCity)
  }

  return (
    <div className='CityPicker'>
      <p className='city-pick' onClick={selectCityHandler}>
        <span className='material-icons-round'>place</span>
        Helsinki, Finland
      </p>
      <p className='city-pick' onClick={selectCityHandler}>
        <span className='material-icons-round'>place</span>
        Turku, Finland
      </p>
      <p className='city-pick' onClick={selectCityHandler}>
        <span className='material-icons-round'>place</span>
        Oulu, Finland
      </p>
      <p className='city-pick' onClick={selectCityHandler}>
        <span className='material-icons-round'>place</span>
        Vaasa, Finland
      </p>
    </div>
  )
}

export default CityPicker
