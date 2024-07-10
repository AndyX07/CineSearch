import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import BackButton from '../components/BackButton';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const AnimeMovie = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async (url, setState) => {
      try {
        const response = await fetch(url, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`,
          },
        });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setState(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`, setMovies);
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

export default AnimeMovie;
