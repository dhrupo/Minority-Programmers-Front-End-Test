import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import UpcomingStartupsData from '../../../dummyData/startupsCompaniesData.json';
import '../FeaturedStartups/FeaturedStartups.css';
import UpcomingStartupsList from './UpcomingStartupsList';

const UpcomingStartups = () => {
    const [startupsCompanies, setStartupsCompanies] = useState([]);
    const [visible, setVisible] = useState(11);
    const allStartupsCompanies = startupsCompanies.slice(0, visible);

    useEffect(() => {
        setStartupsCompanies(UpcomingStartupsData);
    }, [])


    const ViewMoreStartupsCompanies =  () => {
        setVisible(previousLeague => previousLeague + 8);
    };
    
    
    return (
        <div className="pb-5">
            <div className="container">
                <div className="row">
                    <div className="col-md-3 text-white d-flex flex-column justify-content-center">
                        <h2 className="pb-2 pt-3">Upcoming Startups</h2>
                        <p>
                            These visionary companies and disruptors are on their journey to change the world.
                        </p>
                    </div>
                    {
                        allStartupsCompanies.map(startupsCompany => <UpcomingStartupsList startupsCompany={startupsCompany} key={startupsCompany.id}></UpcomingStartupsList>)
                    }
                </div>
                <div className="d-flex justify-content-center mt-4 pt-2">
                    <button onClick={ViewMoreStartupsCompanies} type="button" className="btn px-5 btn-outline-white">Load More</button>
                </div>
            </div>
        </div>
    );
};

export default UpcomingStartups;