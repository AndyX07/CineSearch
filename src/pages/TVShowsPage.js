import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Card from '../components/Card';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const TvShowsByGenres = () => {
  const [actionTvShows, setActionTvShows] = useState([]);
  const [comedyTvShows, setComedyTvShows] = useState([]);
  const [mysteryTvShows, setMysteryTvShows] = useState([]);
  const [romanceTvShows, setRomanceTvShows] = useState([]);
  const [animeTvShows, setAnimeTvShows] = useState([]);

  useEffect(() => {
    const fetchTvShows = async (url, setState) => {
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

    fetchTvShows(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10759`, setActionTvShows);
    fetchTvShows(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=35`, setComedyTvShows);
    fetchTvShows(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=9648`, setMysteryTvShows);
    fetchTvShows(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=10749`, setRomanceTvShows);
    fetchTvShows(`${BASE_URL}/discover/tv?api_key=${API_KEY}&with_genres=16`, setAnimeTvShows);
  }, []);

  return (
    <>
      <section className="product spad">
        <div className="container">
          <div className="trending__product">
            <div className="row">
              <div className="col-lg-8">
                <div className="section-title">
                  <h4>Action & Adventure</h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn__all">
                  <Link to="/action-tv" className="primary-btn">
                    View All <span className="arrow_right"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              {actionTvShows.slice(0, 8).map((show) => (
                <div className="col-lg-3 col-md-4 mb-4" key={show.id}>
                  <Card info={show} />
                </div>
              ))}
            </div>
          </div>
          <div className="trending__product">
            <div className="row">
              <div className="col-lg-8">
                <div className="section-title">
                  <h4>Comedy TV Shows</h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn__all">
                  <Link to="/comedy-tv" className="primary-btn">
                    View All <span className="arrow_right"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              {comedyTvShows.slice(0, 8).map((show) => (
                <div className="col-lg-3 col-md-4 mb-4" key={show.id}>
                  <Card info={show} />
                </div>
              ))}
            </div>
          </div>
          <div className="trending__product">
            <div className="row">
              <div className="col-lg-8">
                <div className="section-title">
                  <h4>Mystery</h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn__all">
                  <Link to="/mystery-tv" className="primary-btn">
                    View All <span className="arrow_right"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              {mysteryTvShows.slice(0, 8).map((show) => (
                <div className="col-lg-3 col-md-4 mb-4" key={show.id}>
                  <Card info={show} />
                </div>
              ))}
            </div>
          </div>
          <div className="trending__product">
            <div className="row">
              <div className="col-lg-8">
                <div className="section-title">
                  <h4>Romance TV Shows</h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn__all">
                  <Link to="/romance-tv" className="primary-btn">
                    View All <span className="arrow_right"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              {romanceTvShows.slice(0, 8).map((show) => (
                <div className="col-lg-3 col-md-4 mb-4" key={show.id}>
                  <Card info={show} />
                </div>
              ))}
            </div>
          </div>
          <div className="trending__product">
            <div className="row">
              <div className="col-lg-8">
                <div className="section-title">
                  <h4>Anime TV Shows</h4>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="btn__all">
                  <Link to="/anime-tv" className="primary-btn">
                    View All <span className="arrow_right"></span>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row">
              {animeTvShows.slice(0, 8).map((show) => (
                <div className="col-lg-3 col-md-4 mb-4" key={show.id}>
                  <Card info={show} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TvShowsByGenres;
