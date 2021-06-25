import React, { useEffect, useState }  from 'react';
import { Link, NavLink } from 'react-router-dom';
import courseWeeksData from '../../../dummyData/courseWeeksData.json';
import CourseWeeksList from './CourseWeeksList';
import './CourseWeeks.css';

const CourseDetails = () => {
    const [weeks, setWeeks] = useState([]);

    useEffect(() => {
        setWeeks(courseWeeksData);
    }, [])

    return (
        <div className="course-details">
            <div className="menu-items mt-4 d-md-flex justify-content-center">
                <ul>
                    <li>
                        <NavLink to="#" exact activeClassName="menu-item-active">
                            Modules
                        </NavLink>
                    </li>
                    <li className="ps-md-5">
                        <Link to="#">
                            Calendar
                        </Link>
                    </li>
                    <li className="ps-md-5">
                        <Link to="#">
                            Messages
                        </Link>
                    </li>
                </ul>
            </div>

            {
                weeks.map(week => <CourseWeeksList courseWeek={week} key={week.id}></CourseWeeksList>)
            }
            
        </div>
    );
};

export default CourseDetails;