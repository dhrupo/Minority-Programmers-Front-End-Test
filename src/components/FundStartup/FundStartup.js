import React, { useEffect, useState } from 'react';
import FundSidebar from './FundSidebar/FundSidebar';
import FundStartupHeader from './FundStartupHeader/FundStartupHeader';
import FundStartupInfo from './FundStartupInfo/FundStartupInfo';
import RelatedStartups from './RelatedStartups/RelatedStartups';
import { useParams } from 'react-router-dom';
import startupsData from '../../dummyData/startupsCompaniesData.json';

const FundStartup = () => {
    const { startupID } = useParams();
    const [fundStartup, setFundStartup] = useState([]);
    const data = startupsData;

    useEffect(() => {
        const startupCompanyInfo = data.find(startupCompany => startupCompany.id == startupID);
        setFundStartup(startupCompanyInfo);
    }, [startupID, data])

    return (
        <div className="container">
            <FundStartupHeader fundStartupInfo={fundStartup} />
            <div className="row mt-3">
                <div className="col-md-4">
                    <FundSidebar fundStartupInfo={fundStartup} />
                </div>
                <div className="col-md-8">
                    <FundStartupInfo fundStartupInfo={fundStartup} />
                </div>
                <div className="col-md-4"></div>
                <div className="col-md-8 mb-5 mt-3">
                    <RelatedStartups />
                </div>
            </div>
        </div>
    );
};

export default FundStartup;