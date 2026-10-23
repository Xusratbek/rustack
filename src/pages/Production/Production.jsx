import React from 'react'
import productionData from '../../data/production.json'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';

import '../../index.css'

const Production = () => {
  return (
    <section className='container'>
      <h1 className='text-[32px] leading-[1.18] fira font-medium mb-[32px]'>Производство</h1>
      {
        productionData.map((item) => (
          <div>
            <img className='mb-[52px]' src={item.image} alt="" />
            <p className='max-w-[984px] mb-[56px] text-[18px] leading-[1.5] fira '>{item.text}</p>
            <img className='mb-[52px]' src={item.image2} alt="" />
            <p className='text-[18px] leading-[1.5] fira mb-[56px] max-w-[984px] '>{item.text2}</p>
            <h3 className='text-[24px] leading-[1.2] font-medium mb-[18px] fira'>{item.title}</h3>
            <p className='text-[18px] leading-[1.5] mb-[56px] max-w-[994px]'>{item.text3}</p>
            <Swiper
              
              slidesPerView={3.9}
              spaceBetween={30}

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
              className="my-about mb-[56px]"
            >
              <SwiperSlide>
                <img src={item.image3} alt="" />

              </SwiperSlide>
              <SwiperSlide>
                <img src={item.image4} alt="" />

              </SwiperSlide>
              <SwiperSlide>
                <img src={item.image5} alt="" />

              </SwiperSlide>
              <SwiperSlide>
                <img src={item.image6} alt="" />
              </SwiperSlide>
            </Swiper>
            <h3 className='text-[24px] leading-[1.2] fira mb-[24px] font-medium '>{item.title2}</h3>
            <p className='max-w-[944px] text-[18px] leading-[1.5] mb-[56px]'>{item.text4}</p>
            <img className='mb-[54px]' src={item.image7} alt="" />
            <h3 className='text-[24px] leading-[1.2] font-medium mb-[18px] fira'>{item.title3}</h3>
            <p className='max-w-[984px] fira text-[18px] leading-[1.5] mb-[56px] '>{item.text5}</p>
            <p className='max-w-[984px] text-[18px] leading-[1.5] '>{item.text6}</p>

          </div>

        ))
      }
    </section>
  )
}

export default Production












