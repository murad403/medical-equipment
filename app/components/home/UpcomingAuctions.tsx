"use client";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import AuctionCard from '../../shared/AuctionCard';
import "../../styles/slider.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import "../../styles/slider.css";
import { useGetAllAuctionsQuery } from '@/app/redux/api/api';
import LoadingSpinner from '@/app/shared/LoadingSpinner';

const UpcomingAuctions = () => {
    const { data, isLoading } = useGetAllAuctionsQuery({ page: 1, limit: 12, search: "", filter: "" });
    const auctions = data?.data?.result;
    if(isLoading) return <LoadingSpinner></LoadingSpinner>;
    return (
        <div className='px-5 lg:px-10 py-7 md:py-9 lg:py-14 bg-normal rounded-xl'>
            <h2 className="text-3xl md:text-4xl lg:text-[43px] font-bold text-hard">Upcoming <span className="text-title">Auctions</span></h2>
            <div className='md:mt-7 lg:mt-10 mt-3 relative '>
                <Swiper centeredSlides={false} navigation={{ nextEl: '.swiper-button-next-custom', prevEl: '.swiper-button-prev-custom' }} modules={[Navigation]} className="mySwiper" breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 0
                    },
                    640: {
                        slidesPerView: 2,
                        spaceBetween: 10
                    },
                    1024: {
                        slidesPerView: 3,
                        spaceBetween: 0
                    },
                    1280: {
                        slidesPerView: 4,
                        spaceBetween: 30,
                    },
                }}>
                    {
                        auctions?.map((product: any) =>
                            <SwiperSlide style={{marginRight: "0px", display: "flex", justifyContent: "space-between"}} key={product.id}>
                                <AuctionCard product={product} bgColor={"bg-white"}></AuctionCard>
                            </SwiperSlide>
                        )
                    }
                </Swiper>
                <div className="swiper-button-prev-custom">
                    <IoIosArrowBack />
                </div>
                <div className="swiper-button-next-custom">
                    <IoIosArrowForward />
                </div>
            </div>
        </div>
    );
};

export default UpcomingAuctions;