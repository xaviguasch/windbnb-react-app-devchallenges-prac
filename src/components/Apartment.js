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
      <span>{superHost && 'SUPER HOST'}</span>
      <p>
        {type}. {beds} beds
      </p>
      <p>⭐ {rating}</p>
      <p>{title}</p>
    </div>
  )
}

export default Apartment
