import './App.css';
import React from 'react';
import Home from './pages/Home';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import MoviesPage from './pages/MoviesPage';
import TVShowsPage from './pages/TVShowsPage';
import PopularMovies from './pages/PopularMovies';
import PopularTvShows from './pages/PopularTvShows';
import TopRatedMovies from './pages/TopRatedMovies';
import UpcomingMovies from './pages/UpcomingMovies';
import ContentPageMovie from './pages/ContentPageMovie';
import ContentPageTV from './pages/ContentPageTV';
import ActionMovie from './pages/ActionMovie';
import ComedyMovie from './pages/ComedyMovie';
import HorrorMovie from './pages/HorrorMovie';
import RomanceMovie from './pages/RomanceMovie';
import AnimeMovie from './pages/AnimeMovie';
import ActionTV from './pages/ActionTV';
import ComedyTV from './pages/ComedyTV';
import MysteryTV from './pages/MysteryTV';
import RomanceTV from './pages/RomanceTV';
import AnimeTV from './pages/AnimeTV';
import SearchPage from './pages/SearchPage';

const router = createBrowserRouter(
    createRoutesFromElements(
        <Route path='/' element={<MainLayout />} >
            <Route index element={<Home />} />
            <Route path='/movies' element={<MoviesPage />} />
            <Route path='/movies/:id' element={<ContentPageMovie />} />
            <Route path='/tv-shows' element={<TVShowsPage />} />
            <Route path='/tv-shows/:id' element={<ContentPageTV />} />
            <Route path='/popular-movies' element={<PopularMovies />} />
            <Route path='/popular-tv-shows' element={<PopularTvShows />} />
            <Route path='/top-rated-movies' element={<TopRatedMovies />} />
            <Route path='/upcoming-movies' element={<UpcomingMovies />} />
            <Route path='/action-movie' element={<ActionMovie />} />
            <Route path='/comedy-movie' element={<ComedyMovie />} />
            <Route path='/horror-movie' element={<HorrorMovie />} />
            <Route path='/romance-movie' element={<RomanceMovie />} />
            <Route path='/anime-movie' element={<AnimeMovie />} />
            <Route path='/action-tv' element={<ActionTV />} />
            <Route path='/comedy-tv' element={<ComedyTV />} />
            <Route path='/mystery-tv' element={<MysteryTV />} />
            <Route path='/romance-tv' element={<RomanceTV />} />
            <Route path='/anime-tv' element={<AnimeTV />} />
            <Route path='/search/:id' element={<SearchPage/>}/>
        </Route>
    )
);

function App() {
    return (
        <RouterProvider router={router} />
    );
}

export default App;
