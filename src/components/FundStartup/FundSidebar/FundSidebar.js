import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedinIn, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './FundSidebar.css';

const FundSidebar = ({fundStartupInfo}) => {
    const { teamInfo } = fundStartupInfo;

    return (
        <div className="bg-white fundSidebar-style">
            <h6 className="fw-bold pt-3 pb-1 px-4">Founded 17th May, 2015</h6>
            <hr />
            <div className="px-4">
                <div className="pb-3">
                    <p className="mb-1">Website</p>
                    <div className="d-flex">
                        <a href="https://minorityprogrammers.com" className="text-decoration-none fw-bold" target="_blank" rel="noreferrer">mangoswap.com</a>
                        <div className="ms-3">
                            <a href="https://twitter.com/minorityprogram" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faTwitter} />
                            </a>
                            <a href="https://www.linkedin.com/company/minority-programmers/" className="ms-2" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faLinkedinIn} />
                            </a>
                            <a href="https://www.facebook.com/MinorityProgrammers" className="ms-2" target="_blank" rel="noreferrer">
                                <FontAwesomeIcon icon={faFacebookF} />
                            </a>
                        </div>
                    </div>
                </div>
                <div className="pb-3">
                    <p className="mb-1">Location</p>
                    <h5>San Francisco, California</h5>
                    
                </div>
                <div>
                    <p className="mb-1">Team Size</p>
                    <h5>100-500 people</h5>
                </div>
            </div>
            <hr />
            <div className="px-4">
                <h4 className="pb-1">Meet the team</h4>
                {teamInfo && teamInfo.map(member => (
                    <div key={member.id} className="pt-2 d-flex">
                        <div className="user-avatar">
                            <img src={member.image} className="img-fluid" alt="member" />
                        </div>
                        <div className="ms-3">
                            <h6 className="fw-bold">{member.name}</h6>
                            <p>{member.designation}</p>
                        </div>
                    </div>
                ))}
            </div>
            <hr />
            <div className="px-4 sidebar-tags pb-3">
                <h4>Tags</h4>
                <div className="mt-3">
                    <button className="btn btn-outline-secondary px-2 py-1">Crypto</button>
                    <button className="btn btn-outline-secondary ms-2 px-2 py-1">Exchanges</button>
                    <button className="btn btn-outline-secondary ms-2 px-2 py-1">NFT</button>
                    <button className="btn btn-outline-secondary ms-2 px-2 py-1">Blockchain</button>
                </div>
            </div>
        </div>
    );
};

export default FundSidebar;