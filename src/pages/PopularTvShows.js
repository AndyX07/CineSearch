import React, { useEffect, useState } from 'react';
import Card from '../components/Card';
import BackButton from '../components/BackButton';

const API_KEY = process.env.TMDB_API_KEY;

const PopularTvShows = () => {
  const [tvShows, setTvShows] = useState([]);

  useEffect(() => {
    const fetchTvShows = async () => {
      try {
        const response = await fetch('https://api.themoviedb.org/3/tv/popular?language=en-US&page=1', {
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
        console.error('Error fetching data:', error);
      }
    };

    fetchTvShows();
  }, []);

  return (
    <section className="product spad">
      <div className="container">
        <BackButton />
        <div className="row">
          {tvShows.map((tvShow) => (
            <div className="col-lg-3 col-md-4 mb-5" key={tvShow.id}>
              <Card info={tvShow} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularTvShows;
