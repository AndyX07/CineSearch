import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from './Card';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const HomeContent = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  const [popularTvShows, setPopularTvShows] = useState([]);
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    const fetchMovies = async (url, setState) => {
      try {
        const response = await fetch(url, {
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
        setState(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchMovies('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', setPopularMovies);
    fetchMovies('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', setPopularTvShows);
    fetchMovies('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', setTopRatedMovies);
    fetchMovies('https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', setUpcomingMovies);
  }, []);

  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Popular Movies Section */}
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8">
                  <div className="section-title">
                    <h4>Popular Movies</h4>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="btn__all">
                    <Link to="/popular-movies" className="primary-btn">
                      View All <span className="arrow_right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                {popularMovies.slice(0, 8).map((movie) => (
                  <div className="col-lg-3 col-md-4 mb-5" key={movie.id}>
                    <Card info={movie} />
                  </div>
                ))}
              </div>
            </div>

            {/* Popular TV Shows Section */}
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8">
                  <div className="section-title">
                    <h4>Popular TV Shows</h4>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="btn__all">
                    <Link to="/popular-tv-shows" className="primary-btn">
                      View All <span className="arrow_right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                {popularTvShows.slice(0, 8).map((tvShow) => (
                  <div className="col-lg-3 col-md-4 mb-4" key={tvShow.id}>
                    <Card info={tvShow} />
                  </div>
                ))}
              </div>
            </div>

            {/* Top Rated Movies Section */}
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8">
                  <div className="section-title">
                    <h4>Top Rated Movies</h4>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="btn__all">
                    <Link to="/top-rated-movies" className="primary-btn">
                      View All <span className="arrow_right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                {topRatedMovies.slice(0, 8).map((movie) => (
                  <div className="col-lg-3 col-md-4 mb-4" key={movie.id}>
                    <Card info={movie} />
                  </div>
                ))}
              </div>
            </div>

            {/* Upcoming Movies Section */}
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-8">
                  <div className="section-title">
                    <h4>Upcoming Movies</h4>
                  </div>
                </div>
                <div className="col-lg-4">
                  <div className="btn__all">
                    <Link to="/upcoming-movies" className="primary-btn">
                      View All <span className="arrow_right"></span>
                    </Link>
                  </div>
                </div>
              </div>
              <div className="row">
                {upcomingMovies.slice(0, 8).map((movie) => (
                  <div className="col-lg-3 col-md-4 mb-4" key={movie.id}>
                    <Card info={movie} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomeContent;
