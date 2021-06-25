import React from 'react';
import './FundStartupInfo.css';

const FundStartupInfo = ({fundStartupInfo}) => {
    const {aboutInfo, visionInfo} = fundStartupInfo;
    
    return (
        <div className="bg-white ms-md-3 px-5">
            <div className="pt-4">
                <h4 className="pb-1">About startup</h4>
                <p>{aboutInfo}</p>
            </div>
            <hr />
            <div className="pb-4">
                <h4 className="pb-1">Vision</h4>
                <p>{visionInfo}</p>
            </div>
        </div>
    );
};

export default FundStartupInfo;