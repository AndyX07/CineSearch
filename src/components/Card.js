import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ info }) => {
  const isMovie = info.release_date !== undefined; // Check if 'release_date' exists to determine if it's a movie

  // Determine the title and release date based on whether it's a movie or TV show
  const title = isMovie ? info.title : info.name;
  const releaseDate = isMovie ? info.release_date : info.first_air_date;

  // Determine the link path based on whether it's a movie or TV show
  const linkPath = isMovie ? `/movies/${info.id}` : `/tv-shows/${info.id}`;

  return (
    <div className="product__item">
      <div className="product__item__pic set-bg" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${info.poster_path})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="ep">{info.vote_average.toFixed(2)} / 10</div>
      </div>
      <div className="product__item__text">
        <ul>
          <li>{releaseDate}</li>
          <li>{isMovie ? 'Movie' : 'TV Show'}</li>
        </ul>
        {/* Link to the dynamic route based on info.id */}
        <h5><Link to={linkPath}>{title}</Link></h5>
      </div>
    </div>
  );
};

export default Card;
