import React from 'react'

import about from '../../assets/images/about-company.webp'
import chevron from '../../assets/images/chevron-years.webp'
import right from '../../assets/images/right.svg'
import left from '../../assets/images/left.svg'
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';

import '../../index.css'
import { Navigation } from 'swiper/modules';
import aboutdata from "../../data/aboutdata.json"
import { CircleCheck } from 'lucide-react'
import aboutimg from '../../assets/images/about-track.webp'
import aboutimg2 from '../../assets/images/about-im_v2.webp'
import aboutimg3 from '../../assets/images/about-im2_v2.webp'




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
                    modules={[Navigation]}
                    className="my-about mt-24 "
                >
                    {
                        aboutdata.map((item) => (
                            <SwiperSlide>
                                <div className='h-[373px] border border-solid border-[#ebebeb] rounded-md pt-12 px-4 pb-4'>
                                    <img src={item.img} alt="" />
                                    <h3 className='fira text-[24px] leading-[1.2] font-medium mt-12 max-w-[259px]'>{item.name}</h3>
                                    <p className='max-w-[259px] leading-[1.3] text-[16px] fira mt-4'>{item.description}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }
                </Swiper>

                <div className='w-full flex justify-between mt-24'>
                    <div className='pt-12'>
                        <h2 className='text-[32px] font-medium leading-[1.2] fira'>Сегодня ООО «Рустрак» - это:</h2>
                        <ul className='flex flex-col gap-4 mt-12'>
                            <li className='flex gap-3'>
                                <CircleCheck width={24} height={24} stroke='#fff' fill='#fec80b' />
                                <p className='text-[18px] leading-[1.5] fira ' >3 производственных корпуса, общей площадью более 7000 м2;</p>
                            </li>
                            <li className='flex gap-3'>
                                <CircleCheck width={24} height={24} stroke='#fff' fill='#fec80b' />
                                <p className='text-[18px] leading-[1.5] fira '>производственная территория более 20000 м2;</p>
                            </li>
                            <li className='flex gap-3'>
                                <CircleCheck width={24} height={24} stroke='#fff' fill='#fec80b' />
                                <p className='text-[18px] leading-[1.5] fira '>служба качества, гарантирующая выпуск высококачественной техники;</p>
                            </li>
                            <li className='flex gap-3'>
                                <CircleCheck width={24} height={24} stroke='#fff' fill='#fec80b' />
                                <p className='text-[18px] leading-[1.5] fira '>современный парк станочного оборудования;</p>
                            </li>
                            <li className='flex gap-3'>
                                <CircleCheck width={24} height={24} stroke='#fff' fill='#fec80b' />
                                <p className='text-[18px] leading-[1.5] fira '>ежемесячный объём выпускаемой техники - до 110 единиц.</p>
                            </li>
                            <li className='flex gap-3'>
                                <CircleCheck width={24} height={24} stroke='#fff' fill='#fec80b' />
                                <p className='text-[18px] leading-[1.5] fira '>наличие собственной конструкторско-технологической службы</p>
                            </li>

                        </ul>
                    </div>
                    <div>
                        <img src={aboutimg} alt="" />
                    </div>
                </div>

                <div className='w-full grid grid-cols-3 gap-8'>
                    <div className='bg-[#fec80b] h-[549px] rounded-md'>
                        <div className='py-14 h-full px-3  flex flex-col justify-between '>
                            <div>
                                <h3 className='text-[32px] font-medium leading-[1.2] mb-[12px] fira' >Отрасли применения выпускаемой техники:</h3>
                                <p className='text-[18px] leading-[1.5]'>Cтроительная, телекоммуникационная, коммунальная, дорожное хозяйство, логистика, сельское хозяйство.</p>
                            </div>

                            <div>
                                <h3 className='text-[32px] font-medium leading-[1.2] mb-[12px] fira'>Выпускаемая техника:</h3>
                                <p className='text-[18px] leading-[1.5]'>Краны-манипуляторы, автотопливозаправщики, автовышки, фургоны, самосвалы, бортовые платформы, эвакуаторы, крюковые погрузчики, мастерские, пищевые цистерны, вакуумные машины, автогидроподъёмники.</p>
                            </div>

                        </div>

                    </div>
                    <div>
                        <img className='rounded-md' src={aboutimg2} alt="" />
                    </div>
                    <div>
                        <img className='rounded-md' src={aboutimg3} alt="" />
                    </div>
                     

                </div>

                <div className='mt-32 max-w-[870px]'>
                    <p className='text-[18px] mb-[40px] leading-[1.5] fira'>ООО «РусТрак» является официальным дилером на территории РФ следующих марок: Palfinger, ИНМАН, HKTC, UNIC, DongYang, FASSI, Hangil, XCMG, HIAB.</p>
                    <p className='text-[18px] mb-[40px] leading-[1.5] fira'>За 16 лет деятельности компания заслужила высокий уровень доверия дистрибьютеров и автопроизводителей: ИСУЗУ РУС, КАМАЗ, ГАЗ, DAEWOO, FAW, JAC, ТРАКС ВОСТОК РУС (КОМПАС), МАЗ РУС, ДАЙМЛЕР КАМАЗ РУС (FUSO), ХИНО МОТОРС, FOTON, DONG FENG, SHACHMAN, НЕФАЗ, ЗАВОД СТАРТ</p>
                    <p className='text-[18px] mb-[40px] leading-[1.5] fira'>Наши клиенты: Газпром, Росатом, Россети, РСК «МИГ», Роснефть и др.</p>
                </div>


            </div>
        </section>
    )
}

export default About