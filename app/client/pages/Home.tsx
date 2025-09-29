import React from 'react';
import Banner from '../components/home/Banner';
import ProductCategories from '../components/home/ProductCategories';
import Achievements from '../components/home/Achievements';
import TopPickedAuctions from '../components/home/TopPickedAuctions';
import SellingSteps from '../components/home/SellingSteps';
import UpcomingAuctions from '../components/home/UpcomingAuctions';

const Home = () => {
    return (
        <div className='space-y-10 md:space-y-18'>
            <Banner></Banner>
            <div className='px-4 md:px-14 lg:px-16 space-y-10 md:space-y-18'>
                <ProductCategories></ProductCategories>
                <Achievements></Achievements>
                <TopPickedAuctions></TopPickedAuctions>
            </div>
            <SellingSteps></SellingSteps>
            <div className='px-4 md:px-14 lg:px-16 space-y-10 md:space-y-18'>
                <UpcomingAuctions></UpcomingAuctions>
            </div>
        </div>
    );
};

export default Home;