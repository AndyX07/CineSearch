import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const ContentPageMovie = () => {
  const { id } = useParams();
  const [content, setContent] = useState(null);
  const [cast, setCast] = useState([]);
  const [video, setVideo] = useState(null);

  useEffect(() => {
    const fetchContent = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}?language=en-US&append_to_response=credits`, {
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
        setContent(data); // Set fetched content to state
        // Limit cast to first 10 actors
        setCast(data.credits.cast.slice(0, 10));
      } catch (error) {
        console.error('Error fetching content:', error);
        // Handle error state or redirect to error page
      }
    };

    const getVideo = async () => {
      try {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, {
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
        const trailerVideo = data.results.find(video => video.type === 'Trailer');
        if (trailerVideo) {
          setVideo(trailerVideo.key);
        }
      } catch (error) {
        console.error('Error fetching video:', error);
        // Handle error state or redirect to error page
      }
    };

    if (id) {
      fetchContent();
      getVideo();
    }
  }, [id]); // Re-fetch content whenever id changes

  if (!content) {
    return <div>Loading...</div>; // Or display a loading spinner
  }

  return (
    <section className="product spad">
      <div className="container">
        <div className="row">
          <div className="col-12">
            {/* Movie Details Section */}
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-3">
                  <div
                    className="anime__details__pic set-bg"
                    style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w500${content.poster_path})` }}
                  >
                    {/* Add any other content specific to your layout */}
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="anime__details__text">
                    <div className="anime__details__title">
                      <h3>{content.title}</h3>
                      <span>{content.tagline}</span>
                    </div>
                    <p>{content.overview}</p>
                    <div className="anime__details__widget">
                      <div className="row">
                        <div className="col-lg-6 col-md-6">
                          <ul>
                            <li><span>Release Date:</span> {content.release_date}</li>
                            <li><span>Runtime:</span> {content.runtime} min</li>
                            <li><span>Genres:</span> {content.genres.map(genre => genre.name).join(', ')}</li>
                            {/* Add more details as needed */}
                          </ul>
                        </div>
                        <div className="col-lg-6 col-md-6">
                          <ul>
                            <li><span>Rating:</span> {content.vote_average} / 10</li>
                            <li><span>Vote Count:</span> {content.vote_count}</li>
                            {/* Add more details as needed */}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="anime__details__btn">
                      {video && (
                        <a href={`https://www.youtube.com/watch?v=${video}`} className="watch-btn" target="_blank" rel="noopener noreferrer">
                          <span>Watch Trailer</span> <i className="fa fa-angle-right"></i>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Actors Section */}
            <div className="trending__product">
              <div className="row">
                <div className="col-lg-12">
                  <div className="section-title">
                    <h4>Cast</h4>
                  </div>
                </div>
              </div>
              <div className="row">
                {cast.map(actor => (
                  <div className="col-lg-3 col-md-4 mb-4" key={actor.id}>
                    <div className="anime__review__item">
                      <div className="anime__review__item__pic">
                        <div className="actor-profile">
                          <img
                            src={actor.profile_path ? `https://image.tmdb.org/t/p/w500${actor.profile_path}` : `${process.env.PUBLIC_URL}/img/default.jpg`}
                            alt={`${actor.name} profile`}
                            style={{
                              width: '200px', // Adjust width as needed
                              height: '200px', // Adjust height as needed
                              borderRadius: '50%', // To make it circular
                              objectFit: 'cover', // Ensures the image covers the entire box
                            }}
                          />
                        </div>
                      </div>
                      <div className="anime__review__item__text">
                        <h6>{actor.name}</h6>
                        <p>Character: {actor.character}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* View All Actors Button */}
            <div className="row justify-content-center"> {/* Centering the button */}
              <div className="col-lg-4">
                <div className="btn__all text-center">
                  <a href={`https://www.imdb.com/title/${content.imdb_id}/fullcredits`} className="primary-btn" target="_blank" rel="noopener noreferrer">
                    View All <span className="arrow_right"></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContentPageMovie;
