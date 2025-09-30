import React from 'react';
import Auctions from '../../shared/Auctions';

const TopPickedAuctions = () => {
    return (
        <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold">
        Top-Picked <span className="text-hard">Auctions</span>
      </h2>
      <div className='md:mt-12 mt-7'>
        <Auctions></Auctions>
      </div>
        </div>
    );
};

export default TopPickedAuctions;