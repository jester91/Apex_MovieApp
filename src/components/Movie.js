import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const Movie = ({
  title,
  poster_path,
  overview,
  vote_average,
  backdrop_path,
}) => (
  <div className="movie">
    <img src={IMAGE_BASE_URL + backdrop_path} alt={title} />
    <div className="movie-info">
      <h3>{title}</h3>
      <span>{vote_average}</span>
    </div>
    <div className="movie-effect">
    <h3>Overview</h3>
    <p>{overview}</p>
    </div>
  </div>
);

export default Movie;
