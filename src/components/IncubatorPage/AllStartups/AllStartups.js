import React from 'react';
import FeaturedStartups from '../FeaturedStartups/FeaturedStartups';
import StartupCardsBanner from '../StartupCardsBanner/StartupCardsBanner';
import UpcomingStartups from '../UpcomingStartups/UpcomingStartups';
import './AllStartups.css';

const AllStartups = () => {
    return (
        <>
           <FeaturedStartups /> 
           <StartupCardsBanner />
           <UpcomingStartups />
        </>
    );
};

export default AllStartups;