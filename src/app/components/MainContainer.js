import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import VideoBackGround from "./videoBackground";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
const MainContainer = () => {
  const movies = useSelector((store) => store?.movies?.nowPlayingMovies);
  console.log("movies", movies);

  if (!movies) return;
  const mainMovie = movies[0];

  const { title, id, overview } = mainMovie;
  return (
    <>
      <div>
        <div>
          <VideoBackGround movieId={id} />
          <div className="tailer-info-box">
            <div className="tailer-info">
              <h1>{title}</h1>
              <p>{overview}</p>
              <div className="trailer-btn-box">
                <button className="play-btn">
                  <PlayArrowIcon />
                  Play
                </button>
                <button className="more-info-btn">More info</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MainContainer;
