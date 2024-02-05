import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store?.movies);
console.log('movies.popularMovies', movies.popularMovies  )
  return (
    <div className="bg-black relative secondary-box-wrapper">
      <div className="relative  z-40 movie-list-box">
        <MovieList title={"Now Playing"} movies={movies?.nowPlayingMovies} />
        <MovieList title={"Popular"} movies={movies?.popularMovies} />
        <MovieList title={"Top Rated"} movies={movies?.topRatedMovies} />
        <MovieList
          title={"Upcoming movies"}
          movies={movies?.upComingMovies}
        />
        {/* <MovieList title={"Horror"} movies={movies?.nowPlayingMovies} /> */}
      </div>
    </div>
  );
};

export default SecondaryContainer;
