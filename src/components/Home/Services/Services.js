import React from 'react';
import educationImg from '../../../images/home/education.png';
import careerImg from '../../../images/home/career.png';
import productImg from '../../../images/home/product.png';
import './Services.css';

const Services = () => {
    return (
        <div className="services">
            <div className="container">
                <div className="text-center homeSection-title pt-4">
                    <h5 className="pt-5">What We Do</h5>
                    <h1 className="mt-3">Services We Provide</h1>
                </div>
                <div className="row mt-5">
                    <div className="col-md-4">
                        <div className="mb-md-5 pb-4">
                            <div className="courses-items px-3 mb-4 mx-2">
                                <div className="services-img mb-4 pt-4">
                                    <img src={educationImg} className="img-fluid" alt="" />
                                </div>
                                <h4>Education</h4>
                                <p className="pt-2 pb-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-md-5 pb-4">
                            <div className="courses-items px-3 mb-4 mx-2">
                                <div className="services-img mb-4 pt-4">
                                    <img src={careerImg} className="img-fluid" alt="" />
                                </div>
                                <h4>Career Development</h4>
                                <p className="pt-2 pb-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="mb-md-5 pb-4">
                            <div className="courses-items px-3 mb-4 mx-2">
                                <div className="services-img mb-4 pt-4">
                                    <img src={productImg} className="img-fluid" alt="" />
                                </div>
                                <h4>Software Products</h4>
                                <p className="pt-2 pb-2 text-center">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;