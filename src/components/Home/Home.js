import React from 'react';
import Footer from '../shared/Footer/Footer';
import Navbar from '../shared/Navbar/Navbar';
import HeaderMain from './HeaderMain/HeaderMain';
import Services from './Services/Services';

const Home = () => {
    return (
        <>
            <Navbar />
            <HeaderMain />
            <Services />
            <Footer />
        </>
    );
};

export default Home;