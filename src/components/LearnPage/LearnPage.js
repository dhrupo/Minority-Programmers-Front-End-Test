import React from 'react';
import Navbar from '../shared/Navbar/Navbar';
import CourseCategories from './CourseCategories/CourseCategories';
import LearnBanner from './LearnBanner/LearnBanner';

const LearnPage = () => {
    return (
        <>
            <Navbar />
            <LearnBanner />
            <CourseCategories />
        </>
    );
};

export default LearnPage;