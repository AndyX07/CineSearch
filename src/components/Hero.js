import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const API_KEY = process.env.REACT_APP_TMDB_API_KEY;

const Hero = () => {
    const [images, setImages] = useState([]);

    useEffect(() => {
        const fetchTrendingMovies = async () => {
            try {
                const response = await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1', {
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
                const trendingMovies = data.results.slice(0, 5).map(movie => ({
                    id: movie.id,
                    title: movie.title,
                    overview: movie.overview,
                    backdrop: movie.backdrop_path,
                    poster: movie.poster_path
                }));
                setImages(trendingMovies);
            } catch (error) {
                console.error('Error fetching trending movies:', error);
            }
        };

        fetchTrendingMovies();
    }, []);

    const responsive = {
        superLargeDesktop: {
            breakpoint: { max: 4000, min: 1024 },
            items: 1
        },
        desktop: {
            breakpoint: { max: 1024, min: 768 },
            items: 1
        },
        tablet: {
            breakpoint: { max: 768, min: 464 },
            items: 1
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };

    return (
        <section style={{ position: 'relative', width: '100%', overflow: 'hidden' }}>
            <div style={{ width: '100%', margin: '0 auto' }}>
                <Carousel
                    responsive={responsive}
                    infinite={true}
                    autoPlay={true}
                    autoPlaySpeed={5000}
                    showDots={true}
                    arrows={false}
                >
                    {images.map((movie, index) => (
                        <div key={index} style={{ position: "relative", height: '100vh', backgroundSize: 'cover', backgroundPosition: 'center', backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop})` }}>
                            <div style={{
                                position: 'absolute',
                                top: '60%',
                                left: '10%',
                                transform: 'translateY(-50%)',
                                color: '#fff',
                                textAlign: 'left',
                                maxWidth: '600px',
                                padding: '20px',
                                borderRadius: '10px'
                            }}>
                                <div style={{
                                    fontSize: '14px',
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    marginBottom: '10px',
                                    backgroundColor: '#fff',
                                    color: '#000',
                                    display: 'inline-block',
                                    padding: '5px 10px',
                                    borderRadius: '5px'
                                }}>Trending</div>
                                <h2 style={{ fontSize: '36px', marginBottom: '10px', color: "WHITE" }}>{movie.title}</h2>
                                <p style={{ fontSize: '16px', marginBottom: '20px', color: "WHITE" }}>{movie.overview}</p>
                                <Link to={`/movies/${movie.id}`} style={{
                                    fontSize: '16px',
                                    color: '#fff',
                                    textDecoration: 'none',
                                    display: 'inline-block',
                                    padding: '10px 20px',
                                    backgroundColor: 'RED',
                                    borderRadius: '5px',
                                    transition: 'background-color 0.3s'
                                }}>
                                    <span>Watch Now</span> <i className="fa fa-angle-right"></i>
                                </Link>
                            </div>
                        </div>
                    ))}
                </Carousel>
            </div>
        </section>
    );
};

export default Hero;
