import React, { useEffect, useState } from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import { Link, useHistory } from 'react-router-dom';
import CourseSidebar from '../CourseSidebar/CourseSidebar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import { useParams } from 'react-router-dom';
import weeklyActivityData from '../../../dummyData/courseWeeksData.json';
import './ActivityDetails.css';
import demoVideo from '../../../images/video.mp4';
import VideoPlayer from 'react-video-js-player';
import userImage from '../../../images/user-logo.png';


const ActivityDetails = () => {
    const history = useHistory();
    const { activityID } = useParams();
    const poster = "https://i.postimg.cc/43S6tzJh/youtube-thumbnail.jpg";
    const [activity, setActivity] = useState([]);

    const data = weeklyActivityData;
    const weeklyActivityInfo = data.find(week => week.id == activityID);

    useEffect(() => {
        const activityInfo = weeklyActivityInfo.activity;
        const findActivity = activityInfo.find(activity => activity.id == activityID);
        setActivity(findActivity);
    }, [weeklyActivityInfo, activityID])

    return (
        <>
            <div className="row" style={{ backgroundColor: "#151371" }}>
                <Navbar />
                <div className="col-12 col-md-3">
                    <CourseSidebar />
                </div>
                <div className="col-12 col-md-9" style={{ borderLeft: "5px solid gray" }}>
                    <div className="banner-bg">
                        <VideoPlayer src={demoVideo} poster={poster} height="420">
                        </VideoPlayer>
                    </div>

                    <div className="course-details">
                        <div className="menu-items mt-4">
                            <div className="d-flex justify-content-between mx-5 nextPrev-icons">
                                <Link onClick={() => history.goBack()} to="#">
                                    <   p><FontAwesomeIcon icon={faArrowLeft} /></p>
                                </Link>
                                <Link to="#" data-bs-toggle="modal" data-bs-target="#exampleModal">
                                    <p><FontAwesomeIcon icon={faArrowRight} /></p>
                                </Link>
                            </div>
                            <div className="px-md-5 mx-md-5">
                                <div className="course-weeks px-3 mb-4 mx-2">
                                    <div className="course-status ms-auto">
                                        <span>{activity.status}</span>
                                    </div>
                                    <div className="ms-4 text-white">
                                        <div className="d-pb-1">
                                            <h3 className="mt-3 mb-2">{activity.activityName}</h3>
                                        </div>
                                        <div className="duration mt-3">
                                            <span><FontAwesomeIcon icon={faClock} /></span>
                                            <span className="ms-2">{activity.duration}</span>
                                        </div>
                                        <div className="mt-5">
                                            <h4>Header</h4>
                                            <p>{activity.description}</p>
                                        </div>
                                        <div className="mt-5 mb-5 pb-3">
                                            <h4>Header</h4>
                                            <p>{activity.description}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


                <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="d-flex flex-column justify-content-center align-items-center">
                                <h5 className="mt-4" id="exampleModalLabel">Activity Completed</h5>
                                <div className="user-img2 mt-3">
                                    <img src={userImage} className="img-fluid" alt="user_image" />
                                </div>
                                <p className="mt-3 mb-4 pb-1">
                                    <span>{activity.completionRate}% </span>
                                    <span className="ms-1">{activity.status}</span>
                                </p>
                                <h6>You just completed</h6>
                                <h5>{activity.activityName}</h5>
                                <button className="btn px-4 py-3 banner-btn mt-4 fw-bold mb-3">
                                    Go to Next Lesson
                                </button>
                                <p data-bs-dismiss="modal" aria-label="Close" style={{ cursor: "pointer" }}>Cancel</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ActivityDetails;