import React from 'react'
import right from '../../assets/images/right.svg'
import left from '../../assets/images/left.svg'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import '../../index.css'
import { Navigation, Pagination } from 'swiper/modules';

import truck1 from '../../assets/images/truck1.webp'




const Categories = () => {
  return (
    <div className='py-16'>
        <div className='flex justify-between items-center'>
            <h2 className='fira font-medium text-4xl'>Categories</h2>
            <div className='flex gap-4'>
                <button id='category-prev' className='border-1 hover:bg-[#FEC80B] transition-all duration-300 ease-in-out w-[39px] rounded-sm flex items-center justify-center h-[39px] border-[#000000]'>
                  <img src={left} alt="left-btn" />
                </button>
                <button id='category-next'  className='border-1 w-[39px]  hover:bg-[#FEC80B] transition-all duration-300 ease-in-out rounded-sm flex items-center justify-center h-[39px] text-center border-[#000000]'>
                  <img src={right} alt="right-btn" />
                </button>
            </div>
        </div>
        <br />
        

        <Swiper
  loop={true}
  slidesPerView={4}
  spaceBetween={30}
  navigation={{
    prevEl: '#category-prev',
    nextEl: '#category-next',
  }}
  pagination={{
    clickable: true,
  }}
  breakpoints={{
    0: {
      slidesPerView: 1,
    },
    600: {
      slidesPerView: 2,
    },
    919: {
      slidesPerView: 3,
    },
    980: {
      slidsPerView: 4,
    }
  }}
  modules={[Pagination, Navigation]}
  className="mySwiper"
>
        <SwiperSlide>
          <h4>Curtain cars</h4>
          <p>30 models</p>
          <img className='object-cover' src={truck1} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <h4>Truck-mounted cranes</h4>
          <p>79 models</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4>Fuel tankers</h4>
          <p>26 models</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4>Truck-mounted hydraulic lifts</h4>
          <p>4 models</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4>Tank trucks</h4>
          <p>10 models</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4>Car tow trucks</h4>
          <p>2 models</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4>Insulated vans</h4>
          <p>16 models</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4>Container ships</h4>
          <p>2 models</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4>Hooklifts</h4>
          <p>3 models</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4>Dump trucks</h4>
          <p>12 models</p>
        </SwiperSlide>
        <SwiperSlide>
          <h4>ADR vehicles category EXII</h4>
          <p>4 models</p>
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Categories