//import
import logo from "./logo.svg";
import "./App.css";
import Movie from "./components/Movie";
import React, { useEffect, useState } from "react";
import { TextField, Input } from "@mui/material";

//init the api
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const API_URL = "https://api.themoviedb.org/3/";

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;

const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

const FILTER_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&page=5`;

export { SEARCH_BASE_URL, POPULAR_BASE_URL, FILTER_BASE_URL, API_URL, API_KEY };

//core app
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getMovies(POPULAR_BASE_URL);
  }, []);

  const getMovies =(API) =>{
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  }

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_BASE_URL + searchTerm);

      setSearchTerm("");
    }
  };

  const handleonchange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <header>
        <form onSubmit={handleOnSubmit}>
          <input
            placeholder="Search for movie"
            className="search-box"
            value={searchTerm}
            onChange={handleonchange}
          />
        </form>
      </header>
      <div className="movie-container">
        {movies.length > 0 &&
          movies.map((movie) => <Movie key={movie.id} {...movie} />)}
      </div>
    </>
  );
}

export default App;
