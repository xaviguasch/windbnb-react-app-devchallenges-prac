import { useState } from 'react'

import './Search.css'

const Search = () => {
  const [expanded, setExpanded] = useState(false)

  const searchHandler = () => {
    setExpanded(!expanded)
  }

  if (!expanded) {
    return (
      <div className='search' onClick={searchHandler}>
        <button className='btn btn--city'>City, Country</button>
        <button className='btn btn--guests'>Add Guests</button>
        <button className='btn btn--icon'>
          <span class='material-icons-round'>search</span>
        </button>
      </div>
    )
  }

  return (
    <div className='search' onClick={searchHandler}>
      <h2>Search Expanded</h2>
      <h3>It is expanded</h3>
    </div>
  )
}

export default Search
