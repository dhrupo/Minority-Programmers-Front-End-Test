import React from 'react';
import CourseWeeks from '../CourseWeeks/CourseWeeks';
import UserBanner from '../UserBanner/UserBanner';

const MainCourseInfo = () => {
   
    return (
        <>
            <div className="banner-bg">
                <UserBanner />
            </div>
            <CourseWeeks />
        </>
    );
};

export default MainCourseInfo;