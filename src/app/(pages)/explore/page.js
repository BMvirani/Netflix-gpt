"use client";

import GptMovieList from "@/app/components/GptMovieList";
import Header from "@/app/components/Header";
import { addGptMovies } from "@/app/store/gptSlice";
import { API_OPTIONS } from "@/app/utils/constants";
import lang from "@/app/utils/languageConstants";
import openai from "@/app/utils/openai";
import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";

const page = () => {
  const searchRef = useRef(null);
  const dispatch = useDispatch();
      
 const langkey =   useSelector(store => store.config.lang)
 console.log('langkey', langkey)
  const handeGptSearchClick = async () => {
    console.log(searchRef.current.value);

    const gptQuery =
      "Act as a movie recommendation system and suggest some movies for the query" +
      searchRef.current.value +
      "only gives me names of 5 movies , comma seperated like the example result given ahead. Example Result: Ironman, Don, heraperi , gadar , Sholay";

    const gptsearch = await openai.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    const getMovies = gptsearch?.choices[0]?.message?.content.split(",");

    const PromisseArray = getMovies.map((movie)=> SearchMovieTMDB(movie));
    const tmdbResults = await Promise.all(PromisseArray);
    dispatch(addGptMovies(tmdbResults))
    // console.log('tmdbResults', tmdbResults)
  };

  const SearchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "+&include_adult=false&language=en-US&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    return json?.results;
  };

  return (
    <>
      <div className="explore-wrap-outer">
        <div className=" absolute explore-wrap-inner">
          <form onSubmit={(e) => e.preventDefault()}>
            <input ref={searchRef} type="text" placeholder={lang[langkey].searchPlaceholder} />
            <button onClick={handeGptSearchClick}>{lang[langkey].search}</button>
          </form>
        </div>
      </div>
        <GptMovieList />
    </>
  );
};

export default page;
