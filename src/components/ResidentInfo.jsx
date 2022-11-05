import React from 'react'
import useRest from '../hooks/useRest'

const ResidentInfo = ({url}) => {

  const resident = useRest(url)
  let color = 'black';

  if (resident?.status=='Alive') {
    color = 'green';
  }else if (resident?.status=='Dead') {
    color = 'red';
  }

  return (
    <article className='character-card'>
      <header>
        <img src={resident?.image} alt={`image of ${resident?.name}`} />
        <div className='card-name'>
          <h2>{resident?.name}</h2>
          <span style={{color: color}}>{resident?.status}</span>
        </div>
      </header>
      <div>
        
        <ul>
          <li>
            <span>Species: </span>
            {resident?.species}
          </li>
          <li>
            <span>Origin: </span>
            {resident?.origin.name}
          </li>
          <li>
            <span>Episodes where appears: </span>
            {resident?.episode.length}
          </li>
        </ul>
      </div>
    </article>

  )
}

export default ResidentInfo