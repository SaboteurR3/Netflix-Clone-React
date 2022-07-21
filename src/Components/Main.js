import axios from "axios";
import React from "react";
import { useState, useEffect } from "react";
import requests from "../Request";

const Main = () => {
  const [movies, setMovies] = useState([]);
  // for random film image on background
  const randomMovie = movies[Math.floor(Math.random() * movies.length)];
  // fetch data
  useEffect(() => {
    axios.get(requests.requestPopular).then((resp) => {
      setMovies(resp.data.results);
    });
  }, []);

  const moiveDescriptionReducer = (descr) => {
    if (descr?.length > 300) {
      return descr.slice(0, 300) + "...";
    } else {
      return descr;
    }
  };
  const notReal = () => {
    alert("Are you kidding me? I'm not real (O_O) <3");
  };
  return (
    <div className="w-full h-[760px] text-white">
      <div className="w-full h-full">
        <div className="absolute w-full h-[760px] bg-gradient-to-r from-black"></div>
        <img
          className="w-full h-full object-cover"
          src={`https://image.tmdb.org/t/p/original/${randomMovie?.backdrop_path}`}
          alt={randomMovie?.title}
        />
        <div className="absolute w-full top-[20%] p-4 md:p-8">
          <h1 className="text-3xl md:text-5xl font-bold">
            {randomMovie?.title}
          </h1>
          <div className="my-4">
            <button
              className="border bg-gray-300 text-black border-gray-300 py-2 px-5 hover:opacity-80"
              onClick={notReal}
            >
              Play
            </button>
            <button
              className="border text-white border-gray-300 py-2 px-5 ml-4 hover:opacity-80"
              onClick={notReal}
            >
              Watch Later
            </button>
          </div>
          <p className="text-gray-400 text-sm">
            Released: {randomMovie?.release_date}
          </p>
          <p className="w-full md:max-w-[70%] lg:max-w-[50%] xl:max-w-[35%] text-gray-200">
            {moiveDescriptionReducer(randomMovie?.overview)}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
