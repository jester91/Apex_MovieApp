//import
import logo from "./assets/CICR_logo.png";
import "./App.css";
import Movie from "./components/Movie";
import React, { useEffect, useState } from "react";
import { Input } from "@mui/material";
import { css } from "@emotion/react";
import HashLoader from "react-spinners/HashLoader";

//init the api
const API_KEY = process.env.REACT_APP_MOVIE_API_KEY;

const API_URL = "https://api.themoviedb.org/3/";

const SEARCH_BASE_URL = `${API_URL}search/movie?api_key=${API_KEY}&query=`;

const POPULAR_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}`;

const FILTER_BASE_URL = `${API_URL}movie/popular?api_key=${API_KEY}&page=5`;

export { SEARCH_BASE_URL, POPULAR_BASE_URL, FILTER_BASE_URL, API_URL, API_KEY };

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
  padding-top:25%
`;

//core app
function App() {
  const [movies, setMovies] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);

    getMovies(POPULAR_BASE_URL);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);

  const getMovies = (API) => {
    fetch(API)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setMovies(data.results);
      });
  };

  const handleOnSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      getMovies(SEARCH_BASE_URL + searchTerm);
      setLoading(true);
      setSearchTerm("");
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    }
  };

  const handleonchange = (e) => {
    setSearchTerm(e.target.value);
  };
  return (
    <>
      <header>
        <a href="/">
        <img className="logo" src={logo} alt="Logo" />

        </a>

        <form onSubmit={handleOnSubmit}>
          <Input
            placeholder="Search for movie"
            className="search-box"
            value={searchTerm}
            onChange={handleonchange}
          />
        </form>
      </header>
      {loading ? (
        <HashLoader css={override} size={150} color={"00ffa3"} loading={loading} />
      ) : (
        <div className="movie-container">
          {movies.length > 0 &&
            movies.map((movie) => <Movie key={movie.id} {...movie} />)}
        </div>
      )}
    </>
  );
}

export default App;
