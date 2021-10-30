import { useState } from 'react'

import './Search.css'

const Search = () => {
  const [expanded, setExpanded] = useState(false)

  const setHidden = () => {
    // Stops scrolling when the overlay is open
    if (document.body.style.overflow !== 'hidden') {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'scroll'
    }
  }

  const searchHandler = () => {
    setHidden()
    setExpanded(!expanded)
  }

  return (
    <div>
      <div className='search' onClick={searchHandler}>
        <button className='btn btn--city'>City, Country</button>
        <button className='btn btn--guests'>Add Guests</button>
        <button className='btn btn--icon'>
          <span class='material-icons-round'>search</span>
        </button>
      </div>

      {expanded && (
        <div className='overlay'>
          <button onClick={searchHandler}>close</button>
        </div>
      )}
    </div>
  )
}

export default Search
