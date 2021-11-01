import { useState } from 'react'

import GuestManager from './GuestManager'
import CityPicker from './CityPicker'

import './Search.css'

const Search = () => {
  const [expanded, setExpanded] = useState(false)
  const [guestManager, setGuestManager] = useState(false)
  const [cityPicker, setCityPicker] = useState(true)

  const [numAdult, setNumAdult] = useState(0)
  const [numChildren, setNumChildren] = useState(0)
  const [city, setCity] = useState('Helsinki')

  // stops scrolling when the overlay is open
  if (expanded) {
    document.body.style.overflow = 'hidden'
  } else {
    document.body.style.overflow = 'scroll'
  }

  const searchHandler = () => {
    setExpanded(!expanded)
  }

  const cityHandler = () => {
    setCityPicker(true)
    setGuestManager(false)
  }

  const guestManagerHandler = () => {
    setGuestManager(true)
    setCityPicker(false)
  }

  const subtractAdults = () => {
    if (numAdult > 0) {
      setNumAdult((prev) => prev - 1)
    }
  }

  const addAdults = () => {
    setNumAdult((prev) => prev + 1)
  }

  const subtractChildren = () => {
    if (numChildren > 0) {
      setNumChildren((prev) => prev - 1)
    }
  }

  const addChildren = () => {
    setNumChildren((prev) => prev + 1)
  }

  const selectCity = (city) => {
    setCity(city)
    setGuestManager(true)
    setCityPicker(false)
  }

  return (
    <div>
      <div className='search' onClick={searchHandler}>
        <button className='btn btn--city'>City, Country</button>
        <button className='btn btn--guests'>Add Guests</button>
        <button className='btn btn--icon'>
          <span className='material-icons-round'>search</span>
        </button>
      </div>

      {expanded && (
        <div className='overlay'>
          <div className='ov__header'>
            <p className='ov__text'>Edit your search</p>
            <button className='btn btn--overlay' onClick={searchHandler}>
              <span className='material-icons-round'>close</span>
            </button>
          </div>
          <div className='search search--overlay'>
            <button className='btn btn--city' onClick={cityHandler}>
              City, Country
            </button>
            <button className='btn btn--guests' onClick={guestManagerHandler}>
              Add Guests
            </button>
          </div>
          {cityPicker && <CityPicker selectCity={selectCity} />}
          {guestManager && (
            <GuestManager
              numAdult={numAdult}
              numChildren={numChildren}
              subtractAdults={subtractAdults}
              addAdults={addAdults}
              subtractChildren={subtractChildren}
              addChildren={addChildren}
            />
          )}
        </div>
      )}
    </div>
  )
}

export default Search
