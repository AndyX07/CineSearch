import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer className="footer">
            <div className="page-up">
                <a href="" id="scrollToTopButton"><span className="arrow_carrot-up"></span></a>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footer__logo">
                            <Link to="/"><img src="img/logo.png" alt=""/></Link>
                        </div>
                    </div>
                    <div className="col-lg-6">
                        <div className="footer__nav">
                            <ul>
                                <li className="active"><Link to="/">Homepage</Link></li>
                                <li><Link to="/movies">Movies</Link></li>
                                <li><Link to="/tv-shows">TV Shows</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3">
                        <p>
                            {/* Copyright text */}
                            Copyright &copy;<script>document.write(new Date().getFullYear());</script> All rights reserved | This template is made with <i className="fa fa-heart" aria-hidden="true"></i> by <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer">Colorlib</a>
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
