import { useState } from 'react'

import { DATA } from '../assets/stays.js'
import Apartment from './Apartment'

import './Gallery.css'

const Gallery = (props) => {
  const [city, setCity] = useState('')
  const [guests, setGuests] = useState(0)

  return (
    <div className='Gallery'>
      <div className='row'>
        <h2 className='title'>Stays in Findland</h2>
        <p className='found-stays'>num of stays</p>
      </div>

      <div className='apartments'>
        {DATA.map((d) => (
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
