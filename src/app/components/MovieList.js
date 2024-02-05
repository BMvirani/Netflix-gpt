import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  return (
    <div className="movies-list-outer">
      <h1 className="text-white movie-list-title">{title}</h1>
      <div className="flex overflow-x-scroll movie-list-wrap">
        <div className="flex movie-list">
          {movies?.map((movie) => (
            <MovieCard key={movie?.id} posterPath={movie?.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
