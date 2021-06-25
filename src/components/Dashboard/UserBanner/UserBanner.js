import React from 'react';
import userImage from '../../../images/user-logo.png';
import './UserBanner.css';

const UserBanner = () => {
    return (
        <div className="pt-5 ms-5 ps-md-5 pb-4">
           <div className="d-md-flex">
                 <div className="col-12 col-md-4">
                    <div className="use-image mt-3">
                        <img src={userImage} className="img-fluid" alt="user_image" />
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className="col-12 col-md-5 mt-3">
                    <div className="user-info">
                        <h1>Welcome back, <br /> Shot</h1>
                        <p className="text-white mt-3">100% Completed</p>
                    </div>
                    <div className="ms-5 mt-5">
                        <button className="btn btn-blue px-5">Resume</button>
                    </div>
                </div>
                <div className="col-md-2"></div>
           </div>
        </div>
    );
};

export default UserBanner;