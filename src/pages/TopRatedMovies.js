import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import BackButton from '../components/BackButton';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const TopRatedMovies = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', {
          method: 'GET',
          headers: {
            accept: 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setMovies(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <section className="product spad">
      <div className="container">
        <BackButton/>
        <div className="row">
          {movies.map((movie) => (
            <div className="col-lg-3 col-md-4 mb-5" key={movie.id}>
              <Card info={movie} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopRatedMovies;
