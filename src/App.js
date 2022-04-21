//import
import logo from "./logo.svg";
import "./App.css";
import Button from "@mui/material/Button";
import Movie from "./components/Movie";
import React, { useEffect, useState } from "react";

//init the api
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;
// const recommended_api="https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&language=en-US&page=1"
// const img_api="https://image.tmdb.org/t/p/w1280"
// const search_api=""

const API_URL = "https://api.themoviedb.org/3/";

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;

const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

const FILTER_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&page=5`;

const IMAGE_BASE_URL = "http://image.tmdb.org/t/p/";

const BACKDROP_SIZE = "w1280";

const POSTER_SIZE = "w500";

export {
  SEARCH_BASE_URL,
  POPULAR_BASE_URL,
  FILTER_BASE_URL,
  API_URL,
  API_KEY,
  IMAGE_BASE_URL,
  BACKDROP_SIZE,
  POSTER_SIZE,
};

//core app
function App() {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(POPULAR_BASE_URL)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }, []);

  return <div>{movies.length > 0 && movies.map((movie) => <Movie key={movie.id}  data={movie}/>)}</div>;
}

export default App;
