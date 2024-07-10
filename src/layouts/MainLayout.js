import React from 'react'
import {Outlet} from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import Loader from '../components/Loader'

const MainLayout = () => {
    return (
        <>
                <Loader />
                <Header/>
                <Outlet />
                <Footer/>
        </>
    )
}

export default MainLayout