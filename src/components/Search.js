import { useState } from 'react'

import GuestManager from './GuestManager'
import CityPicker from './CityPicker'

import './Search.css'

const Search = ({
  selectCity,
  city,
  numAdult,
  numChildren,
  addAdults,
  addChildren,
  subtractAdults,
  subtractChildren,
}) => {
  const [expanded, setExpanded] = useState(false)
  const [guestManager, setGuestManager] = useState(false)
  const [cityPicker, setCityPicker] = useState(true)

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

  return (
    <div>
      <div className='search' onClick={searchHandler}>
        <button className='btn btn--city'>{city}, Country</button>
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
              {city}, Finland
            </button>
            <button className='btn btn--guests' onClick={guestManagerHandler}>
              Add Guests
            </button>
          </div>
          {cityPicker && <CityPicker selectCity={selectCity} city={city} />}
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

          <div className='search-btn-area'>
            <button className='btn btn--main' onClick={searchHandler}>
              <span className='material-icons-round icon-search'>search</span>
              Search
            </button>
          </div>
        </div>
      )}
    </div>
  )
}

export default Search
