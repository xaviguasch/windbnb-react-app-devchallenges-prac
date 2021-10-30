import React from 'react'

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
      <img src={photo} alt='apartment' />
      <span className='super-host'>{superHost && 'super host'}</span>
      <p className='description'>
        {type}. {beds} beds
      </p>
      <p>
        <span class='material-icons-round'>star</span>{' '}
        <span className='rating'>{rating}</span>
      </p>
      <p className='info'>{title}</p>
    </div>
  )
}

export default Apartment
