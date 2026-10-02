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
import swiper7 from '../../assets/images/swiper7.webp'

import { useTranslation } from 'react-i18next'
import '../../index.css'

import { Autoplay, EffectFade, Navigation, Pagination } from 'swiper/modules';
import { Link } from 'react-router-dom';


const Main = () => {
  const [callModal, setCallModal] = useState(false)
  const { t } = useTranslation();




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
        className='main-swiper'
      >

        <SwiperSlide>
          <div className="bg-cover   bg-center bg-no-repeat h-full" style={{ backgroundImage: `url(${swiper1})` }}>
            <div className='py-36 h-full w-[50%] px-8 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.7)_54.17%,rgba(0,0,0,0.45)_80.73%,rgba(0,0,0,0)_100%)] '>
              <h2 className='max-w-[451px] mb-[16px] text-[28px] text-[#ffffff] leading-[1.1] fira font-bold'>{t("slide1Title")}</h2>
              <p className='mb-[32px] max-w-[458px] text-base text-[#ffffff] leading-[1.5] font-normal fira'>{t("slide1Text")} <br />
                {t("slide1TextEnd")} </p>
              <button className=' text-base w-[144px] h-[43px] fira text-[#000000] rounded-sm   bg-[#fec80b]'>{t("slide1Button")}</button>

            </div>

          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="bg-cover bg-center bg-no-repeat h-full" style={{ backgroundImage: `url(${swiper2})` }}>
            <div className='py-32 px-8'>
              <h2 className='max-w-[441px] mb-[16px] text-[28px] text-[#ffffff] leading-[1.1] fira font-bold'>{t("slide2Title")} </h2>
              <p className='mb-[32px] text-base text-[#ffffff] leading-[1.5] font-normal fira'>{t("slide2Text")}</p>
              <button onClick={openCallModal} className='border-2 w-[185px] h-[43px] fira text-[#ffffff] rounded-sm  border-solid border-[#fec80b]'>{t("slide2Button")}</button>

            </div>

          </div>

        </SwiperSlide>



        <SwiperSlide>
          <div className="bg-cover   bg-center bg-no-repeat h-full" style={{ backgroundImage: `url(${swiper3})` }}>
            <div className='py-36 h-full w-[50%] px-8 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.7)_54.17%,rgba(0,0,0,0.45)_80.73%,rgba(0,0,0,0)_100%)] '>
              <h2 className='max-w-[441px] mb-[16px] text-3xl text-[#ffffff] leading-[1.1] fira font-bold'>{t("slide3Title")}</h2>
              <p className='mb-[32px] text-base text-[#ffffff] leading-[1.5] font-normal fira'>{t("slide3Text")}<br />
                {t("slide3Price")}  </p>
              <button onClick={openCallModal} className='border-2 w-[185px] h-[43px] fira text-[#ffffff] rounded-sm  border-solid border-[#fec80b]'>{t("slide2Button")}</button>

            </div>

          </div>
        </SwiperSlide>


        <SwiperSlide>
          <div className="bg-cover   bg-center bg-no-repeat h-full" style={{ backgroundImage: `url(${swiper4})` }}>
            <div className='py-36 h-full w-[50%] px-8 bg-[linear-gradient(90deg,rgba(0,0,0,0.9)_0%,rgba(0,0,0,0.7)_54.17%,rgba(0,0,0,0.45)_80.73%,rgba(0,0,0,0)_100%)] '>
              <h2 className='max-w-[441px] mb-[16px] text-3xl text-[#ffffff] leading-[1.1] fira font-bold'>{t("slide4Title")}</h2>
              <p className='mb-[32px] max-w-[458px] text-base text-[#ffffff] leading-[1.5] font-normal fira'>{t("slide4Text")} </p>
              <button className=' text-base w-[144px] h-[43px] fira text-[#000000] rounded-sm   bg-[#fec80b]'>{t("slide1Button")}</button>

            </div>

          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="bg-cover bg-center bg-no-repeat h-full" style={{ backgroundImage: `url(${swiper5})` }}>
            <div className='py-36 px-8'>
              <h2 className='max-w-[441px] mb-[16px] text-[28px] text-[#ffffff] leading-[1.1] fira font-bold'>{t("slide5Title")}</h2>
              <p className='mb-[32px] max-w-[458px] text-base text-[#ffffff] leading-[1.5] font-normal fira'>{t("slide5Text")}</p>
              <div className='flex gap-4'>
                <Link to="/about" className='text-base text-center content-center w-[185px] h-[43px] fira text-[#000000] rounded-sm bg-[#fec80b]'>{t("slide5Catalog")}</Link>

                <button onClick={openCallModal} className='border-2 w-[185px] hover:bg-[#fec80b] hover:text-[#000000] h-[43px] fira text-[#ffffff] rounded-sm  border-solid border-[#fec80b]'>{t("slide2Button")}</button>
              </div>
            </div>
          </div>
        </SwiperSlide>



        <SwiperSlide>

          <div className="bg-cover bg-center bg-no-repeat h-full" style={{ backgroundImage: `url(${swiper6})` }}>
            <div className='py-36 px-8'>
              <h2 className='max-w-[441px] mb-[16px] text-[28px] text-[#ffffff] leading-[1.1] fira font-bold'>{t("slide6Title")}</h2>
              <p className='mb-[32px] max-w-[458px] text-base text-[#ffffff] leading-[1.5] font-normal fira'>{t("slide6Text")}</p>
              <div className='flex gap-4'>
                <Link className='text-base text-center content-center w-[144px] h-[43px] fira text-[#000000] rounded-sm bg-[#fec80b]'>{t("slide1Button")}</Link>

                <button onClick={openCallModal} className='border-2 w-[185px] hover:bg-[#fec80b] hover:text-[#000000] h-[43px] fira text-[#ffffff] rounded-sm  border-solid border-[#fec80b]'>{t("slide2Button")}</button>
              </div>
            </div>
          </div>

        </SwiperSlide>



        <SwiperSlide>
          <div className="bg-cover bg-center bg-no-repeat h-full" style={{ backgroundImage: `url(${swiper7})` }}>
            <div className='py-36 px-8'>
              <h2 className='max-w-[441px] mb-[16px] text-[28px] text-[#ffffff] leading-[1.1] fira font-bold'>{t("slide7Title")}</h2>
              <p className='mb-[32px] max-w-[458px] text-base text-[#ffffff] leading-[1.5] font-normal fira'>{t("slide7Text")}</p>
              <div className='flex gap-4'>
                <Link to="/about" className='text-base text-center content-center w-[144px] h-[43px] fira text-[#000000] rounded-sm bg-[#fec80b]'>{t("slide1Button")}</Link>

                <button onClick={openCallModal} className='border-2 w-[185px] hover:bg-[#fec80b] hover:text-[#000000] h-[43px] fira text-[#ffffff] rounded-sm  border-solid border-[#fec80b]'>{t("slide2Button")}</button>
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