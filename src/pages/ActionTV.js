import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import BackButton from '../components/BackButton';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;
const BASE_URL = 'https://api.themoviedb.org/3';

const ActionTV = () => {
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
    <section className="product spad">
      <div className="container">
        <BackButton/>
        <div className="row">
          {actionTvShows.map((movie) => (
            <div className="col-lg-3 col-md-4 mb-5" key={movie.id}>
              <Card info={movie} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ActionTV;
