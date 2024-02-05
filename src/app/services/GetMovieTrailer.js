"use client";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addTrailerVideo } from "../store/moviesSlice";
import { API_OPTIONS } from "../utils/constants";

const GetMovieTrailer = async(movieId) => {
    console.log('movieIdmovieIdmovieId', movieId)
    const dispatch = useDispatch();
  useEffect(() => {
    getMovieVideo();
  }, []);

  const getMovieVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
      API_OPTIONS
    );

    const json = await data.json();
    console.log("moviess video", json);
    const allTrailer = json?.results?.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = allTrailer.length ? allTrailer[0] : json.results[0];
    dispatch(addTrailerVideo(trailer)); 
  };

};

export default GetMovieTrailer;
