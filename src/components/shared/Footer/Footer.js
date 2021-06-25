import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faTwitter, faLinkedinIn, faGithub, faYoutube} from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <ul className="social-icons list-unstyled d-flex justify-content-center mb-0">
                            <li>
                                <a href="https://www.facebook.com/MinorityProgrammers" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faFacebookF} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/minorityprogrammers/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faInstagram} />
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/minorityprogram" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faTwitter} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/company/minority-programmers/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faLinkedinIn} />
                                </a>
                            </li>
                            <li>
                                <a href="https://github.com/MinorityProgrammers/" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faGithub} />
                                </a>
                            </li>
                            <li>
                                <a href="https://www.youtube.com/c/minorityprogrammers" target="_blank" rel="noreferrer">
                                    <FontAwesomeIcon icon={faYoutube} />
                                </a>
                            </li>
                        </ul>
                        <p className="text-white">&copy; Copyright 2021 by <span className="ms-1 fw-bold">Minority Programmers</span> </p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;