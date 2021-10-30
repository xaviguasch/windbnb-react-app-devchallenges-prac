import { useState } from 'react'

import { DATA } from '../assets/stays.js'
import Apartment from './Apartment'

import './Gallery.css'

const Gallery = (props) => {
  const [city, setCity] = useState('')
  const [guests, setGuests] = useState(0)

  return (
    <div>
      <h2>Stays in Findland</h2>

      <p>num of stays</p>

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
  )
}

export default Gallery
