import React from 'react';
import Navbar from '../../shared/Navbar/Navbar';
import CourseSidebar from '../CourseSidebar/CourseSidebar';
import MainCourseInfo from '../MainCourseInfo/MainCourseInfo';

const Course = () => {
    return (
        <>
            <Navbar />
            <div className="row" style={{backgroundColor: "#151371"}}>
                <div className="col-12 col-md-3">
                    <CourseSidebar />
                </div>
                <div className="col-12 col-md-9" style={{borderLeft: "5px solid gray"}}>
                    <MainCourseInfo />
                </div>
            </div>
        </>
    );
};

export default Course;