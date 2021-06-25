import React from 'react';
import { Link } from 'react-router-dom';

const CourseWeeksList = ({courseWeek}) => {
    const { name, week, completionStatus, completionAverage, id } = courseWeek;

    return (
        <>
            <Link to={`/week/${id}`} className="text-decoration-none">
                <div className="px-md-5 mx-md-5 mt-4">
                    <div className="course-weeks px-3 mb-4 mx-2">
                        <div className="course-status ms-auto">
                            <span>{completionStatus}</span>
                        </div>
                        <div className="d-pb-1">
                            <h4 className="mt-3 mb-2 text-white">{week} - {name}</h4>
                        </div>
                        <div className="d-flex justify-content-center mb-1">
                            <div className="progress mt-1">
                                <div className="my-progress-bar w-100" role="progressbar" aria-valuenow="83" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                        <p className="text-center text-white">
                            {completionAverage}
                            <span className="ms-1">{completionStatus}</span>
                        </p>
                    </div>
                </div> 
            </Link> 
        </>
    );
};

export default CourseWeeksList;