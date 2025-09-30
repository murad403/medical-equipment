"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import auctions from '../../data/auctions';
import AuctionCard from '../../shared/AuctionCard';
import "../../styles/slider.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../../styles/slider.css";

const UpcomingAuctions = () => {
    return (
        <div className='px-5 lg:px-10 lg:py-16 sliderResponsive'>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-hard">Upcoming <span className="text-black">Auctions</span></h2>
            <div className='md:mt-7 mt-4 relative'>
                <Swiper centeredSlides={false} slidesPerGroup={3} navigation={{nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom'}} modules={[Navigation]} className="mySwiper" breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    640:{
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    1024:{
                        slidesPerView: 3,
                        spaceBetween: 120
                    }
                }}>
                    {
                        auctions.map(product => 
                            <SwiperSlide key={product.id}>
                                <AuctionCard product={product} bgColor={"lg:bg-white bg-normal"}></AuctionCard>
                            </SwiperSlide>
                        )
                    }
                 </Swiper>
                 <div className="swiper-button-prev-custom">
                    <IoIosArrowBack/>
                 </div>
                <div className="swiper-button-next-custom">
                    <IoIosArrowForward/>
                </div>
            </div>
        </div>
    );
};

export default UpcomingAuctions;