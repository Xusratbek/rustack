import React from 'react'
import right from '../../assets/images/right.svg'
import left from '../../assets/images/left.svg'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import '../../index.css'
import {Navigation,Pagination } from 'swiper/modules';

import truck1 from '../../assets/images/truck1.webp'
import truck2 from '../../assets/images/truck2.webp'
import truck3 from '../../assets/images/truck3.webp'
import truck4 from '../../assets/images/truck4.webp'
import truck5 from '../../assets/images/truck5.webp'
import truck6 from '../../assets/images/truck6.webp'
import truck7 from '../../assets/images/truck7.webp'
import truck8 from '../../assets/images/truck8.webp'
import truck9 from '../../assets/images/truck9.webp'
import truck10 from '../../assets/images/truck10.webp'
import truck11 from '../../assets/images/truck11.webp'







const Categories = () => {
  return (
    <div className='py-16'>
      <div className='flex justify-between items-center'>
        <h2 className='fira font-medium text-4xl'>Categories</h2>
        <div className='flex gap-4'>
          <button id='category-prev' className='border-1 hover:bg-[#FEC80B] transition-all duration-300 ease-in-out w-[39px] rounded-sm flex items-center justify-center h-[39px] border-[#000000]'>
            <img src={left} alt="left-btn" />
          </button>
          <button id='category-next' className='border-1 w-[39px]  hover:bg-[#FEC80B] transition-all duration-300 ease-in-out rounded-sm flex items-center justify-center h-[39px] text-center border-[#000000]'>
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
        modules={[Navigation,Pagination]}
        className="my-swiper"
      >
        <SwiperSlide>
          <h4>Шторные автомобили</h4>
          <p>30 models</p>
          <img  src={truck1} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <h4>Краны-манипуляторы</h4>
          <p>79 models</p>
          <img src={truck2} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h4>Автотопливозаправщики</h4>
          <p>26 models</p>
          <img src={truck3} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h4>Автогидроподъёмники</h4>
          <p>4 models</p>
          <img src={truck4} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h4>Автоцистерны</h4>
          <p>10 models</p>
          <img src={truck5} alt="" />

        </SwiperSlide>
        <SwiperSlide>
          <h4>Автоэвакуаторы</h4>
          <p>2 models</p>
          <img src={truck6} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h4>Изотермические фургоны</h4>
          <p>16 models</p>
          <img src={truck7} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h4>Контейнеровозы</h4>
          <p>2 models</p>
          <img src={truck8} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h4>Крюковые погрузчики</h4>
          <p>3 models</p>
          <img src={truck9} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h4>Самосвалы</h4>
          <p>12 models</p>
          <img src={truck10} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <h4>Автомобили ДОПОГ категория EXII</h4>
          <p>4 models</p>
          <img src={truck11} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Categories