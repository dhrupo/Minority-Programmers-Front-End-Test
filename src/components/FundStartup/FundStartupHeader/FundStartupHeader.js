import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './FundStartupHeader.css';
import { Link, useHistory } from 'react-router-dom';

const FundStartupHeader = ({fundStartupInfo}) => {
    const {name, logo, status, fundAverage, amount} = fundStartupInfo;
    const history = useHistory();

    return (
        <div className="mt-4 startup-header bg-white">
            <div className="row align-items-center">
                <div className="col-md-1 d-md-flex justify-content-center align-items-center startupHeader-item">
                    <div className="arrow-icon">
                        <Link onClick={() => history.goBack()} to="#">
                            <FontAwesomeIcon icon={faArrowLeft} style={{color: '#000'}} />
                        </Link>
                    </div>
                </div>
                <div className="col-md-2 startupHeader-item">
                    <div className="d-flex justify-content-between align-items-center">
                        <div className="mangoswap-logo">
                            <img src={logo} className="img-fluid" alt="mangoswapLogo" style={{height: "75%"}} />
                        </div>
                        <h4 className="ms-1 mb-0 fw-bold">{name}</h4>
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-md-3 startupHeader-item">
                    <div className="d-flex">
                        <h6 className="fund-status">{status}</h6>
                        <span className="ms-4">{fundAverage}</span>
                    </div>
                    <h6 className="fw-bold">{amount}</h6>
                </div>
                <div className="col-md-3 startupHeader-item">
                    <div className="progress ms-md-5">
                        <div className="my-progress-bar w-50" role="progressbar" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                </div>
                <div className="col-md-2 startupHeader-item">
                    <button className="btn banner-btn ms-md-4">
                        Fund Startup
                    </button>
                </div>
            </div>
        </div>
    );
};

export default FundStartupHeader;