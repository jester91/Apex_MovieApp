import * as React from "react";

const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";

const setVoteClass = (vote) => {
  if (vote >= 7.5) {
    return "green";
  } else if (vote >= 6) {
    return "yellow";
  } else {
    return "red";
  }
};

const Movie = ({ title, overview, vote_average, backdrop_path }) => (
  <div className="movie">
    <a href={"https://en.wikipedia.org/wiki/" + title} target="_blank">
      <img
        src={
          backdrop_path
            ? IMAGE_BASE_URL + backdrop_path
            : "https://media.istockphoto.com/photos/popcorn-and-clapperboard-picture-id1191001701?k=20&m=1191001701&s=612x612&w=0&h=uDszifNzvgeY5QrPwWvocFOUCw8ugViuw-U8LCJ1wu8="
        }
        alt={title}
      />
    </a>
    <div className="movie-info">
      <a>{title}</a>
      <span className={`tag ${setVoteClass(vote_average)}`}>
        {vote_average}
      </span>
    </div>
    <div className="movie-effect">
      <a>Overview</a>
      <p>{overview}</p>
    </div>
  </div>
);

export default Movie;
