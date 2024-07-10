import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

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

    // Owl Carousel options
    const options = {
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 5000,
        smartSpeed: 800,
        responsive: {
            0: {
                items: 1
            }
        }
    };

    return (
        <section className="hero">
            <div className="container">
                <OwlCarousel className="hero__slider owl-carousel" {...options}>
                    {images.map((movie, index) => (
                        <div className="hero__items set-bg" key={index} style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original${movie.backdrop})` }}>
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="hero__text">
                                        <div className="label">Trending</div>
                                        <h2>{movie.title}</h2>
                                        <p>{movie.overview}</p>
                                        <Link to={`/movies/${movie.id}`} className="hero__link">
                                            <span>Watch Now</span> <i className="fa fa-angle-right"></i>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </OwlCarousel>
            </div>
        </section>
    );
};

export default Hero;
