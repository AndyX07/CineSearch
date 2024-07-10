import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import BackButton from '../components/BackButton';
import { useParams } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const SearchPage = () => {
  const { id } = useParams();
  const [movies, setMovies] = useState([]);
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const searchMovies = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&query=${id}`, {
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
        console.error('Error fetching movie data:', error);
      }
    };

    const searchTVShows = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/search/tv?include_adult=false&language=en-US&page=1&query=${id}`, {
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
        setTvShows(data.results);
      } catch (error) {
        console.error('Error fetching TV show data:', error);
      }
    };

    if (id) {
      searchMovies();
      searchTVShows();
    }
  }, [id]);

  return (
    <section className="product spad">
      <div className="container">
        <BackButton />
        <div className="trending__product">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <h4>Movies</h4>
              </div>
            </div>
          </div>
          <div className="row">
            {movies && movies.length > 0 ? (
              movies.map((movie) => (
                <div className="col-lg-3 col-md-4 mb-4" key={movie.id}>
                  <Card info={movie} />
                </div>
              ))
            ) : (
              <div className="col-lg-12">
                <p>No movies found</p>
              </div>
            )}
          </div>
        </div>
        <div className="trending__product">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title">
                <h4>TV Shows</h4>
              </div>
            </div>
          </div>
          <div className="row">
            {tvShows && tvShows.length > 0 ? (
              tvShows.map((tvShow) => (
                <div className="col-lg-3 col-md-4 mb-4" key={tvShow.id}>
                  <Card info={tvShow} />
                </div>
              ))
            ) : (
              <div className="col-lg-12">
                <p>No TV shows found</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SearchPage;
