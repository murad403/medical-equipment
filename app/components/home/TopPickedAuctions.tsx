import React from 'react';
import Auctions from '../../shared/Auctions';

const TopPickedAuctions = () => {
    return (
        <div>
            <h2 className="text-3xl md:text-4xl lg:text-[43px] text-title font-bold">
        Top-Picked <span className="text-hard">Auctions</span>
      </h2>
      <div className='md:mt-9 lg:mt-12 mt-3'>
        <Auctions></Auctions>
      </div>
        </div>
    );
};

export default TopPickedAuctions;