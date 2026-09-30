import { useState } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import Modal from '../Modal/Modal'
import swiper1 from '../../assets/images/swiper1.webp'
import swiper2 from '../../assets/images/swiper2.webp'
import swiper3 from '../../assets/images/swiper3.webp'
import swiper4 from '../../assets/images/swiper4.webp'
import swiper5 from '../../assets/images/swiper5.webp'
import swiper6 from '../../assets/images/swiper6.webp'

import '../../index.css'

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Main = () => {
  const [callModal, setCallModal] = useState(false)




  const openCallModal = () => {
    setCallModal(true)
  }

  const closeCallModal = () => {
    setCallModal(false)
  }
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
        modules={[EffectFade, Navigation, Pagination,]}
        className="mySwiper"
      >

        <SwiperSlide>
          <div className="bg-cover   bg-center bg-no-repeat h-full" style={{ backgroundImage: `url(${swiper3})` }}>
            <div className='py-36 h-full w-[50%] px-8 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.7)_54.17%,rgba(0,0,0,0.45)_80.73%,rgba(0,0,0,0)_100%)] '>
              <h2 className='max-w-[441px] mb-[16px] text-3xl text-[#ffffff] leading-[1.1] fira font-bold'>Бортовые платформы со шторным механизмом</h2>
              <p className='mb-[32px] max-w-[458px] text-base text-[#ffffff] leading-[1.5] font-normal fira'>Производство и поставка коммерческого транспорта, бортовых платформ, в том числе со сдвижными шторами, сдвижной крышей. </p>
              <button className=' text-base w-[144px] h-[43px] fira text-[#000000] rounded-sm   bg-[#fec80b]'>Подробнее</button>

            </div>

          </div>
        </SwiperSlide>

        
        <SwiperSlide>
          <div className="bg-cover bg-center bg-no-repeat h-full" style={{ backgroundImage: `url(${swiper1})` }}>
            <div className='py-36 px-8'>
              <h2 className='max-w-[441px] mb-[16px] text-2xl text-[#ffffff] leading-[1.1] fira font-bold'>АТЗ Рустрак включены в реестр российской промышленной продукции </h2>
              <p className='mb-[32px] text-base text-[#ffffff] leading-[1.5] font-normal fira'>Теперь доступны для приобретения по 44 ФЗ </p>
              <button onClick={openCallModal} className='border-2 w-[185px] h-[43px] fira text-[#ffffff] rounded-sm  border-solid border-[#fec80b]'>Заказать звонок</button>

            </div>

          </div>

        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-cover   bg-center bg-no-repeat h-full" style={{ backgroundImage: `url(${swiper2})` }}>
            <div className='py-36 h-full w-[50%] px-8 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.7)_54.17%,rgba(0,0,0,0.45)_80.73%,rgba(0,0,0,0)_100%)] '>
              <h2 className='max-w-[441px] mb-[16px] text-3xl text-[#ffffff] leading-[1.1] fira font-bold'>В наличии шторные фургоны КАМАЗ 4308</h2>
              <p className='mb-[32px] text-base text-[#ffffff] leading-[1.5] font-normal fira'>Размеры надстройки 6200х2550х2850 мм. <br />
                Цена 5 500 000 руб.  </p>
              <button onClick={openCallModal} className='border-2 w-[185px] h-[43px] fira text-[#ffffff] rounded-sm  border-solid border-[#fec80b]'>Заказать звонок</button>

            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-cover   bg-center bg-no-repeat h-full" style={{ backgroundImage: `url(${swiper3})` }}>
            <div className='py-36 h-full w-[50%] px-8 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.7)_54.17%,rgba(0,0,0,0.45)_80.73%,rgba(0,0,0,0)_100%)] '>
              <h2 className='max-w-[441px] mb-[16px] text-3xl text-[#ffffff] leading-[1.1] fira font-bold'>Бортовые платформы со шторным механизмом</h2>
              <p className='mb-[32px] max-w-[458px] text-base text-[#ffffff] leading-[1.5] font-normal fira'>Производство и поставка коммерческого транспорта, бортовых платформ, в том числе со сдвижными шторами, сдвижной крышей. </p>
              <button className=' text-base w-[144px] h-[43px] fira text-[#000000] rounded-sm   bg-[#fec80b]'>Подробнее</button>

            </div>

          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-cover bg-center bg-no-repeat h-full" style={{ backgroundImage: `url(${swiper4})` }}>
            <div className='py-36 px-8'>
              <h2 className='max-w-[441px] mb-[16px] text-2xl text-[#ffffff] leading-[1.1] fira font-bold'>ООО «РусТрак»</h2>
              <p className='mb-[32px] max-w-[458px] text-base text-[#ffffff] leading-[1.5] font-normal fira'>Производство и поставка специализированной техники и спецтранспорта</p>
              <div className='flex gap-4'> 
                <Link to="/about" className='text-base text-center content-center w-[144px] h-[43px] fira text-[#000000] rounded-sm bg-[#fec80b]'>Открыть каталог</Link>

                <button onClick={openCallModal} className='border-2 w-[185px] hover:bg-[#fec80b] hover:text-[#000000] h-[43px] fira text-[#ffffff] rounded-sm  border-solid border-[#fec80b]'>Заказать звонок</button>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>

          <div className="bg-cover bg-center bg-no-repeat h-full" style={{ backgroundImage: `url(${swiper5})` }}>
            <div className='py-36 px-8'>
              <h2 className='max-w-[441px] mb-[16px] text-2xl text-[#ffffff] leading-[1.1] fira font-bold'>Краны манипуляторы на базе MCV/HCV грузовиков</h2>
              <p className='mb-[32px] max-w-[458px] text-base text-[#ffffff] leading-[1.5] font-normal fira'>Производство автомобилей с крано-манипуляторными установками. Использование противосдвиговых пластин, установка блока распределителя управления задними опорами, открытый профиль HOSSEN, монтажные плиты в основании КМУ, окрас платформы в цвет крана.</p>
              <div className='flex gap-4'> 
                <Link  className='text-base text-center content-center w-[144px] h-[43px] fira text-[#000000] rounded-sm bg-[#fec80b]'>Подробнее</Link>

                <button onClick={openCallModal} className='border-2 w-[185px] hover:bg-[#fec80b] hover:text-[#000000] h-[43px] fira text-[#ffffff] rounded-sm  border-solid border-[#fec80b]'>Заказать звонок</button>
              </div>
            </div>
          </div>
          
        </SwiperSlide>
        <SwiperSlide>

           <div className="bg-cover bg-center bg-no-repeat h-full" style={{ backgroundImage: `url(${swiper6})` }}>
            <div className='py-36 px-8'>
              <h2 className='max-w-[441px] mb-[16px] text-2xl text-[#ffffff] leading-[1.1] fira font-bold'>Автотопливозаправщики на базе MCV/HCV грузовиков</h2>
              <p className='mb-[32px] max-w-[458px] text-base text-[#ffffff] leading-[1.5] font-normal fira'>Производство и поставка автотопливозаправщиков объёмом 8 и 6 м.куб. Алюминиевые коммуникации, композитные напорно-всасывающие рукава, производительный узел выдачи топлива.</p>
              <div className='flex gap-4'> 
                <Link to="/about" className='text-base text-center content-center w-[144px] h-[43px] fira text-[#000000] rounded-sm bg-[#fec80b]'>Подробнее</Link>

                <button onClick={openCallModal} className='border-2 w-[185px] hover:bg-[#fec80b] hover:text-[#000000] h-[43px] fira text-[#ffffff] rounded-sm  border-solid border-[#fec80b]'>Заказать звонок</button>
              </div>
            </div>
          </div>

        </SwiperSlide>
      </Swiper>
      <Modal closeCallModal={closeCallModal} callModal={callModal} />
    </>
  )
}

export default Main