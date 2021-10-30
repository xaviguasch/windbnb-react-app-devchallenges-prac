import React from 'react'

import './Apartment.css'

const Apartment = ({
  city,
  country,
  superHost,
  title,
  rating,
  maxGuests,
  type,
  beds,
  photo,
}) => {
  return (
    <div className='apartment'>
      <img className='apt-img' src={photo} alt='apartment' />
      <div className='apt-details'>
        <div className='super-and-description'>
          {superHost && <span className='super-host'>super host</span>}
          <p className='description'>
            {type}. {beds} beds
          </p>
        </div>
        <p className='star-rating'>
          <span class='material-icons-round'>star</span>{' '}
          <span className='rating'>{rating}</span>
        </p>
      </div>
      <p className='info'>{title}</p>
    </div>
  )
}

export default Apartment
