"use client";
import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieList = () => {
  const gptMovies = useSelector((store) => store.gpt.gptMovies);
  console.log("gptMovies", gptMovies);

  let moviesArray = [];

  for (let i = 0; i < gptMovies?.length; i++) {
    moviesArray = moviesArray?.concat(gptMovies[i]);
  }
  console.log("moviesArray", moviesArray);
  return (
    <div className="gpt-movies-wrap">
      {gptMovies && (
        <>
          <h1>Search for you</h1>
            
          <MovieList title={""} movies={moviesArray} />
        </>
      )}
    </div>
  );
};

export default GptMovieList;
