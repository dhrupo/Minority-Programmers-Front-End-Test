import React from 'react';
import './LearnBanner.css';

const LearnBanner = () => {
    return (
        <div className="learnBanner">
            <div className="h-100 d-flex align-items-center">
                <div className="col-md-6">
                    <div className="learnBanner-image"></div>
                </div>
                <div className="col-12 col-md-6 d-flex flex-column align-items-center justify-content-center">
                    <h1 className="text-white fw-bold">Learn high in demand <br /> IT Skills & Get Crypto</h1>
                    <div className="fw-bold" style={{}}>
                        <span className="text-white">powered by</span>
                        <span className="ms-2 text-dark">KoinStreet</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LearnBanner;