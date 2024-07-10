import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const MoviesByGenres = () => {
  const [actionMovies, setActionMovies] = useState([]);
  const [comedyMovies, setComedyMovies] = useState([]);
  const [horrorMovies, setHorrorMovies] = useState([]);
  const [romanceMovies, setRomanceMovies] = useState([]);
  const [animeMovies, setAnimeMovies] = useState([]);

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

    fetchMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=28`, setActionMovies);
    fetchMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=35`, setComedyMovies);
    fetchMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=27`, setHorrorMovies);
    fetchMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=10749`, setRomanceMovies);
    fetchMovies(`https://api.themoviedb.org/3/discover/movie?api_key=${API_KEY}&with_genres=16`, setAnimeMovies);
  }, []);

  return (
    <>
    <section className="product spad">
      <div className="container">
        <div className="trending__product">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <h4>Action</h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="btn__all">
                <Link to="/action-movie" className="primary-btn">
                  View All <span className="arrow_right"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {actionMovies.slice(0, 8).map((movie) => (
              <div className="col-lg-3 col-md-4 mb-4" key={movie.id}>
                <Card info={movie} />
              </div>
            ))}
          </div>
        </div>
        <div className="trending__product">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <h4>Comedy</h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="btn__all">
                <Link to="/comedy-movie" className="primary-btn">
                  View All <span className="arrow_right"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {comedyMovies.slice(0, 8).map((movie) => (
              <div className="col-lg-3 col-md-4 mb-4" key={movie.id}>
                <Card info={movie} />
              </div>
            ))}
          </div>
        </div>
        <div className="trending__product">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <h4>Horror</h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="btn__all">
                <Link to="/horror-movie" className="primary-btn">
                  View All <span className="arrow_right"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {horrorMovies.slice(0, 8).map((movie) => (
              <div className="col-lg-3 col-md-4 mb-4" key={movie.id}>
                <Card info={movie} />
              </div>
            ))}
          </div>
        </div>
        <div className="trending__product">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <h4>Romance</h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="btn__all">
                <Link to="/romance-movie" className="primary-btn">
                  View All <span className="arrow_right"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {romanceMovies.slice(0, 8).map((movie) => (
              <div className="col-lg-3 col-md-4 mb-4" key={movie.id}>
                <Card info={movie} />
              </div>
            ))}
          </div>
        </div>
        <div className="trending__product">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <h4>Anime</h4>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="btn__all">
                <Link to="/anime-movie" className="primary-btn">
                  View All <span className="arrow_right"></span>
                </Link>
              </div>
            </div>
          </div>
          <div className="row">
            {animeMovies.slice(0, 8).map((movie) => (
              <div className="col-lg-3 col-md-4 mb-4" key={movie.id}>
                <Card info={movie} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    </>
  );
};

export default MoviesByGenres;
