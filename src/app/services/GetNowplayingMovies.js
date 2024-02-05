"use client";
import { useDispatch } from "react-redux";
import { addNowPlayingMovies } from "../store/moviesSlice";
import { useEffect } from "react";

 const GetNowplayingMovies = () => {
  const dispatch = useDispatch();

  const nowPlayingMovies = async () => {
    const options = {
      method: "GET",
      headers: {
        accept: "application/json",
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNWY0NGY4ZjRmOTFhYWUzZDFlODdjMDU1OTVlYTM2MCIsInN1YiI6IjY1OGM2NmNkNjcyOGE4NmRkMjI4MTA5YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.2F_tNOimnSv3OJGLMgB0-hek94lsSGhrb1bxowfqGhk",
      },
    };

    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1",
      options
    );

    const json = await data.json();

    const res = await json?.results;
    dispatch(addNowPlayingMovies(res));
  };


  useEffect(() => {
    nowPlayingMovies();
  }, []);
};


export default GetNowplayingMovies;