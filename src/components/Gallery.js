import React from 'react'

import { DATA } from '../assets/stays.js'
import Apartment from './Apartment'

import './Gallery.css'

const Gallery = ({ totalGuests, city }) => {
  const filteredData = DATA.filter((d) => d.city === city && d.maxGuests >= totalGuests)

  console.log(filteredData)

  return (
    <div className='Gallery'>
      <div className='row'>
        <h2 className='title'>Stays in Findland</h2>
        <p className='found-stays'>{filteredData.length}+ stays</p>
      </div>

      <div className='apartments'>
        {filteredData.map((d) => (
          <Apartment
            key={d.title}
            city={d.city}
            country={d.country}
            superHost={d.superHost}
            title={d.title}
            rating={d.rating}
            maxGuests={d.maxGuests}
            type={d.type}
            beds={d.beds}
            photo={d.photo}
          />
        ))}
      </div>
    </div>
  )
}

export default Gallery
