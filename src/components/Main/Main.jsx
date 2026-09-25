import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import swiper1 from '../../assets/images/swiper1.webp'
import swiper2 from '../../assets/images/swiper2.webp'
import swiper3 from '../../assets/images/swiper3.webp'
import swiper4 from '../../assets/images/swiper4.webp'
import swiper5 from '../../assets/images/swiper5.webp'
import swiper6 from '../../assets/images/swiper6.webp'

import '../../index.css'

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';


const Main = () => {
  return (
     <>
      <Swiper
        loop={true}
        spaceBetween={30}
        effect={'fade'}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 4000,
          
        }}
        modules={[EffectFade, Navigation, Pagination,Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img src={swiper1} alt='swiper' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper2} alt='swiper' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper3} alt='swiper' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper4} alt='swiper' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper5} alt='swiper' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={swiper6} alt='swiper' />
        </SwiperSlide>
      </Swiper>

     </>
  )
}

export default Main