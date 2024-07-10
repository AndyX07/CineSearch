import React from 'react';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import Loader from '../components/Loader.js';
import Hero from '../components/Hero.js';
import HomeContent from '../components/HomeContent.js';


function Home() {
    return (
        <>
            <Hero />
            <HomeContent />
        </>
    );
}

export default Home;