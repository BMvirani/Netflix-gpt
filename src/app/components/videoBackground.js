import React, { useEffect, useState } from "react";
import { API_OPTIONS } from "../utils/constants";
import GetMovieTrailer from "../services/GetMovieTrailer";
import { useSelector } from "react-redux";

const VideoBackGround = ({ movieId }) => {
  GetMovieTrailer(movieId);

  const movies = useSelector((store) => store?.movies?.trailerVideo);
  if (!movies) return;
  const { key } = movies;

  return (
    <><div>
      <iframe
        src={`https://www.youtube.com/embed/${key}?&autoplay=1&mute=1&loop=1&playlist=${key}`}
        title="YouTube video player"
        // frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        // allowfullscreen
        
      ></iframe>
      </div>
    </>
  );
};

export default VideoBackGround;
