import React from 'react';
import Banner from '../components/home/Banner';
import ProductCategories from '../components/home/ProductCategories';

const Home = () => {
    return (
        <div className='space-y-10 md:space-y-18'>
            <Banner></Banner>
            <div className='px-4 md:px-14 lg:px-16'>
                <ProductCategories></ProductCategories>
            </div>
        </div>
    );
};

export default Home;