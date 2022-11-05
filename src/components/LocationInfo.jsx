import React from 'react'

const LocationInfo = ({location}) => {


  return (
    <div className='location-card'>
      <h2>{location?.name}</h2>
      <ul>
        <li><span>Type: </span> <i>{location?.type}</i></li>
        <li><span>Dimension: </span> <i>{location?.dimension}</i></li>
        <li><span>Population: </span> <i>{location?.residents.length}</i></li>
      </ul>
    </div>
  )
}

export default LocationInfo