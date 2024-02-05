import React from 'react'
import { IMG_SDN } from '../utils/constants'

const MovieCard = ({posterPath}) => {
  if(!posterPath) return;
  return (
    <div className='w-40 p-2'>
      <img alt="Movie card" src={IMG_SDN+posterPath} />
    </div>
  )
}

export default MovieCard