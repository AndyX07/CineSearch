import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

function Header() {
    const [searchInput, setSearchInput] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const [fadeState, setFadeState] = useState(''); // New state for fade animation
    const location = useLocation();
    const navigate = useNavigate();

    const handleSearchInputChange = (e) => {
        setSearchInput(e.target.value);
    };

    const handleOpenSearch = () => {
        setFadeState('fade-in');
        setShowSearch(true);
    };

    const handleCloseSearch = () => {
        setFadeState('fade-out');
        // Delay setting showSearch to false until after the fade-out animation completes
        setTimeout(() => setShowSearch(false), 500);
    };

    const isActive = (path) => {
        return location.pathname === path ? 'active' : '';
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();
        if(searchInput.trim()){
            const serachInputFormatted=searchInput.trim().replace(/\s+/g, '-');
            navigate(`/search/${serachInputFormatted}`);
            setShowSearch(false);
            setSearchInput('');
        }
    }

    return (
        <>
            <header className="header">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-2">
                            <div className="header__logo">
                                <Link to="/">
                                    <img src="img/logo.png" alt="Logo"/>
                                </Link>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <div className="header__nav">
                                <nav className="header__menu mobile-menu">
                                    <ul>
                                        <li className={isActive('/')}>
                                            <NavLink exact to="/">Homepage</NavLink>
                                        </li>
                                        <li className={isActive('/movies')}>
                                            <NavLink to="/movies">Movies</NavLink>
                                        </li>
                                        <li className={isActive('/tv-shows')}>
                                            <NavLink to="/tv-shows">TV Shows</NavLink>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                        <div className="col-lg-2">
                            <div className="header__right">
                                <a href="javascript:void(0)" className="search-switch" onClick={handleOpenSearch} aria-label="Open Search">
                                    <span className="icon_search"></span>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div id="mobile-menu-wrap"></div>
                </div>
            </header>

            {showSearch &&
                <div className={`search-model ${fadeState}`}>
                    <div className="h-100 d-flex align-items-center justify-content-center">
                        <div className="search-close-switch" onClick={handleCloseSearch} aria-label="Close Search">
                            <i className="icon_close"></i>
                        </div>
                        <form className="search-model-form" onSubmit={handleSearchSubmit}>
                            <input 
                                type="text" 
                                id="search-input" 
                                placeholder="Search here..." 
                                value={searchInput} 
                                onChange={handleSearchInputChange}
                                aria-label="Search Input"
                            />
                        </form>
                    </div>
                </div>
            }
        </>
    );
}

export default Header;
