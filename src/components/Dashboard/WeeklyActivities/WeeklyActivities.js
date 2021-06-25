import React, { useEffect, useState } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import { Link, useHistory } from 'react-router-dom';
import CourseSidebar from '../CourseSidebar/CourseSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { useParams } from 'react-router-dom';
import weeklyActivityData from '../../../dummyData/courseWeeksData.json';
import './WeeklyActivities.css';

const WeeklyActivities = () => {
    const history = useHistory();
    const { weekID } = useParams();
    const [weeklyActivity, setWeeklyActivity] = useState([]);

    const data = weeklyActivityData;
    const weeklyActivityInfo = data.find(week => week.id == weekID);
    const activity = weeklyActivityInfo.activity;

    useEffect(() => {
        setWeeklyActivity(activity);
    }, [activity])

    return (
        <>
            <div className="row" style={{ backgroundColor: "#151371" }}>
                <Navbar />
                <div className="col-12 col-md-3">
                    <CourseSidebar />
                </div>
                <div className="col-12 col-md-9" style={{ borderLeft: "5px solid gray" }}>
                    <div className="banner-bg">
                        <div className="pt-5 mx-5 pe-5 ps-md-5 pb-4">
                            <div className="week-info text-white">
                                <h1 className="mb-4">{weeklyActivityInfo.week}</h1>
                                <h5>Progress</h5>
                                <p className="text-center mt-4 pt-2 mb-0">{weeklyActivityInfo.completionRate}</p>
                                <div className=" mb-1">
                                    <div className="progress mt-1">
                                        <div className="progress-bar w-100" role="progressbar" aria-valuenow="100" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                </div>
                                <p className="text-center text-white">
                                    {weeklyActivityInfo.completionAverage}
                                    <span className="ms-1">{weeklyActivityInfo.completionStatus}</span>
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className="course-details">
                        <div className="menu-items mt-4">
                            <div className="d-flex justify-content-between mx-5 nextPrev-icons">
                                <Link onClick={() => history.goBack()} to="#">
                                    <   p><FontAwesomeIcon icon={faArrowLeft} /></p>
                                </Link>
                                <Link to="#">
                                    <p><FontAwesomeIcon icon={faArrowRight} /></p>
                                </Link>
                            </div>
                            {weeklyActivity && weeklyActivity.map(activity => (
                                <Link to={`/activity/${activity.id}`} key={activity.id} className="text-decoration-none">
                                    <div className="px-md-5 mx-md-5">
                                        <div className="course-weeks px-3 mb-4 mx-2">
                                            <div className="row">
                                                <div className="col-md-4 mb-2">
                                                    <img src={activity.image} className="img-fluid" alt="" />
                                                </div>
                                                <div className="col-md-6 d-flex align-items-center ms-3">
                                                    <div className="d-pb-1">
                                                        <h4 className="mt-3 mb-2 text-white">{activity.activityName}</h4>
                                                    </div>
                                                </div>
                                                <div className="col-md-1">
                                                    <div className="course-status ms-auto">
                                                        <span>{activity.status}</span>
                                                    </div>
                                                </div>
                                                <div className="col-md-1"></div>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default WeeklyActivities;