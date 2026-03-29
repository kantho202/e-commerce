"use client"
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';

import firstSlide from '../../assets/image1.jpg';
import secondSlide from '../../assets/image 2.jpg';
import thirdSlide from '../../assets/image 3.png';
import fourSlide from '../../assets/image 4.png';
import Image from 'next/image';

const Banner = () => {
  return (
    <div className="w-full h-[60vh] lg:h-[100vh]">
      <Swiper
        modules={[Autoplay, EffectFade, Navigation, Pagination]}
        slidesPerView={1}
        loop={true}
        effect="fade"
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="h-full"
      >
        {[firstSlide, secondSlide, thirdSlide, fourSlide].map(
          (slide, index) => (
            <SwiperSlide key={index}>
              <div className="relative h-full">
                <Image
                  src={slide}
                  alt=""
                  className="w-full h-full object-cover"
                />

                {/* Overlay text */}
                
              </div>
            </SwiperSlide>
          )
        )}
      </Swiper>
    </div>
  );
};

export default Banner;