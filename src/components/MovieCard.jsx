import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const IMG_PATH = 'https://image.tmdb.org/t/p/w500';

const Moviecard = React.memo(({ movie }) => {
  return (
    <div className="movie-card">
      <Link to={`/movie/${movie.id}`} className="movie-link">
        <img 
          src={`${IMG_PATH}/${movie.poster_path}`} 
          alt={movie.title} 
          className="movie-poster" 
        />
        {/* <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-rating">IMDb Rating: {movie.vote_average}</p> */}
      </Link>
    </div>
  );
});

export default Moviecard;


/*
A component that determines weather to rendder itself based on state or props 
is purecomponent
*/