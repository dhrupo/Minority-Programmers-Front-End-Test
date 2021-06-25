import React, { useState, useEffect } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import StartupsCompaniesData from '../../../dummyData/startupsCompaniesData.json';
import './FeaturedStartups.css';
import settings from './settings';
import FeaturedStartupsList from './FeaturedStartupsList';

const FeaturedStartups = () => {
    const [startupsCompanies, setStartupsCompanies] = useState([]);

    useEffect(() => {
        setStartupsCompanies(StartupsCompaniesData);
    }, [])
    
    return (
        <div className="pb-5 featuredSection">
            <div className="container d-md-flex">
                <div className="col-12 col-md-3 text-white d-flex flex-column justify-content-center">
                    <div className="large-device-Featured">
                        <h2 className="pb-2">Featured <br /> Startups </h2>
                        <p>Invest in the next <br /> billion dollar <br /> company today</p>
                    </div>
                    <div className="small-device-Featured">
                        <h2 className="pt-4">Featured Startups </h2>
                        <p>Invest in the next billion dollar company today</p>
                    </div>
                </div>
                
                <div className="col-12 col-md-9">
                    <Slider {...settings}>
                        {startupsCompanies.map(startupsCompany => <FeaturedStartupsList startupsCompany={startupsCompany} key={startupsCompany.id}></FeaturedStartupsList>)}
                    </Slider>
                </div>
            </div>
        </div>
    );
};

export default FeaturedStartups;