import React from 'react'

import about from '../../assets/images/about-company.webp'
import chevron from '../../assets/images/chevron-years.webp'
import right from '../../assets/images/right.svg'
import left from '../../assets/images/left.svg'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import '../../index.css'
import {Navigation,Pagination } from 'swiper/modules';



const About = () => {

    return (
        <section className='w-full'>
            <div className="w-full h-[432px] relative bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${about})` }} >
                <div className='container'>
                    <p className='max-w-[507px] absolute top-32 text-[#ffffff] text-[22px] leading-[1.2] font-medium'>Автомобильный завод «РусТрак» - ведущий производитель коммерческого транспорта и специализированной техники в Нижнем Новгороде.</p>
                    <img className='w-[141px] h-[151px] absolute bottom-[-20px]' src={chevron} alt="" />
                </div>

            </div>

            <div className='container py-24'>
                <div className='flex justify-between items-center'>
                    <div>
                        <p className='max-w-[649px] text-[22px] leading-[1.4] fira'>
                            Автомобильный завод «РусТрак» является предприятием полного цикла: от конструкторско-технологических разработок до готового изделия.
                        </p>

                    </div>
                    <div className='flex gap-4'>
                        <button id='category-prev' className='border-1 hover:bg-[#FEC80B] transition-all duration-300 ease-in-out w-[39px] rounded-sm flex items-center justify-center h-[39px] border-[#000000]'>
                            <img src={left} alt="left-btn" />
                        </button>
                        <button id='category-next' className='border-1 w-[39px]  hover:bg-[#FEC80B] transition-all duration-300 ease-in-out rounded-sm flex items-center justify-center h-[39px] text-center border-[#000000]'>
                            <img src={right} alt="right-btn" />
                        </button>
                    </div>

                </div>
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
                    modules={[Navigation, Pagination]}
                    className="my-swiper"
                >
                    <SwiperSlide>
                        <h4>Шторные автомобили</h4>
                        <p>30 models</p>
                        <img src={truck1} alt="" />
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
                </Swiper>


            </div>


            <br />
            <br />
            <br />

        </section>
    )
}

export default About