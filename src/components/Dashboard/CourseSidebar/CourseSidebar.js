import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faChevronLeft} from '@fortawesome/free-solid-svg-icons';
import { Link, useHistory } from 'react-router-dom';
import './CourseSidebar.css';

const CourseSidebar = () => {
    const history = useHistory();

    return (
        <div className="course-sidebar pt-5">
            <div className="ms-md-4 back-course mb-3">
                <Link to="#" onClick={() => history.push('/learn')}>
                    <FontAwesomeIcon icon={faChevronLeft} /> <span className="ms-2">Courses</span>
                </Link>
            </div>
            <div className="weeks-info px-md-5">
                <h5>Intro to Blockchain</h5>
                <div className="mt-4 pt-3">
                    <h5 className="mb-3">Week 1</h5>
                    <div className="mb-2">
                        <Link to="#" className="text-decoration-none text-white">
                            <span className="green-check"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="ms-2">Introduction</span>
                        </Link>
                    </div>
                    <div className="mb-2">
                        <Link to="#" className="text-decoration-none text-white">
                            <span className="green-check"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="ms-2">Introduction</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="#" className="text-decoration-none text-white">
                            <span className="white-check"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="ms-2">Introduction</span>
                        </Link>
                    </div>
                </div>
                <div className="mt-4 pt-3">
                    <h5 className="mb-3">Week 2</h5>
                    <div className="mb-2">
                        <Link to="#" className="text-decoration-none text-white">
                            <span className="green-check"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="ms-2">Introduction</span>
                        </Link>
                    </div>
                    <div className="mb-2">
                        <Link to="#" className="text-decoration-none text-white">
                            <span className="green-check"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="ms-2">Introduction</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="#" className="text-decoration-none text-white">
                            <span className="white-check"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="ms-2">Introduction</span>
                        </Link>
                    </div>
                </div>
                <div className="mt-4 pt-3">
                    <h5 className="mb-3">Week 3</h5>
                    <div className="mb-2">
                        <Link to="#" className="text-decoration-none text-white">
                            <span className="green-check"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="ms-2">Introduction</span>
                        </Link>
                    </div>
                    <div className="mb-2">
                        <Link to="#" className="text-decoration-none text-white">
                            <span className="green-check"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="ms-2">Introduction</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="#" className="text-decoration-none text-white">
                            <span className="white-check"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="ms-2">Introduction</span>
                        </Link>
                    </div>
                </div>
                <div className="mt-4 pt-3">
                    <h5 className="mb-3">Week 4</h5>
                    <div className="mb-2">
                        <Link to="#" className="text-decoration-none text-white">
                            <span className="green-check"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="ms-2">Introduction</span>
                        </Link>
                    </div>
                    <div className="mb-2">
                        <Link to="#" className="text-decoration-none text-white">
                            <span className="green-check"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="ms-2">Introduction</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="#" className="text-decoration-none text-white">
                            <span className="white-check"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="ms-2">Introduction</span>
                        </Link>
                    </div>
                </div>
                <div className="mt-4 pt-3">
                    <h5 className="mb-3">Week 5</h5>
                    <div className="mb-2">
                        <Link to="#" className="text-decoration-none text-white">
                            <span className="green-check"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="ms-2">Introduction</span>
                        </Link>
                    </div>
                    <div className="mb-2">
                        <Link to="#" className="text-decoration-none text-white">
                            <span className="green-check"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="ms-2">Introduction</span>
                        </Link>
                    </div>
                    <div>
                        <Link to="#" className="text-decoration-none text-white">
                            <span className="white-check"><FontAwesomeIcon icon={faCheck} /></span>
                            <span className="ms-2">Introduction</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSidebar;