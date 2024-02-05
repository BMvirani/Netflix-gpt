import React, { useEffect } from 'react'
import MainContainer from './MainContainer'
import GetNowplayingMovies from '../services/GetNowplayingMovies';
import SecondaryContainer from './SecondaryContainer';
// import GetPopularMovies from '../services/getPopularMovies';
// import GetTopRatedMovies from '../services/getTopRatedMovies';
import GetUpComingMovies from '../services/GetUpComingMovies';
import GetPopularMovies from '../services/GetPopularMovies';
import GetTopRatedMovies from '../services/GetTopRatedMovies';

const Browse = () => {
  
    GetNowplayingMovies()
   GetPopularMovies();
   GetTopRatedMovies();
   GetUpComingMovies();
  return (
    <>
    <div className='bg-black'>
    <MainContainer />
    <SecondaryContainer />
    </div>
    </>
  )
}

export default Browse