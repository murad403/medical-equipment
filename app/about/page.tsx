import React from 'react';
import About from '../components/about/About';
import WhoWeAre from '../components/about/WhoWeAre';
import Achievements from '../components/home/Achievements';
import WhyChooseUs from '../components/about/WhyChooseUs';

const page = () => {
    return (
        <div className='space-y-10 md:space-y-16'>
            <About></About>
            <div className='px-4 md:px-14 lg:px-16'>
                <WhoWeAre></WhoWeAre>
            </div>
            <Achievements></Achievements>
            <div className='px-4 md:px-14 lg:px-16'>
                <WhyChooseUs></WhyChooseUs>
            </div>
        </div>
    );
};

export default page;