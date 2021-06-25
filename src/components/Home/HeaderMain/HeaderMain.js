import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import investImg from '../../../images/home/invest.png';
import waveImg from '../../../images/home/wave3.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './HeaderMain.css';

const HeaderMain = () => {
    useEffect(() => {
        AOS.init({ duration: 2000})
    }, [])

    return (
        <div>
            <div className="container">
                <main className="d-md-flex align-items-center mt-5" style={{overflowX: 'hidden'}}>
                    <div className="col-12 col-md-6" data-aos="fade-right">
                        <h1 className="mb-4 text-white">Invest in the next billion dollar company today</h1>
                        <p className="text-white">Find a featured startups or upcoming startups</p>
                        <Link to="/incubator">
                            <button className="btn px-4 purple-btn mt-3">
                                View Incubator
                            </button>
                        </Link>
                    </div>
                    
                    <div className="col-12 col-md-6 invest-img" data-aos="fade-left">
                        <img src={investImg} className="img-fluid" alt="" />
                    </div>
                </main>
            </div>
            <img src={waveImg} className="img-fluid" alt="" />
        </div>
    );
};

export default HeaderMain;