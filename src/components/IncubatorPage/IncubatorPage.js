import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import AllStartups from './AllStartups/AllStartups';
import HeaderBanner from './HeaderBanner/HeaderBanner';

const IncubatorPage = () => {
    return (
        <>
            <Navbar />
            <HeaderBanner />
            <AllStartups />
        </>
    );
};

export default IncubatorPage;