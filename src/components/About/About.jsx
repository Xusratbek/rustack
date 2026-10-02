import React from 'react'
import about from '../../assets/images/about-truck.webp'
import { Link } from 'react-router-dom'
import slider from '../../assets/images/slider.svg'
import { useTranslation } from 'react-i18next'


const About = () => {
    const { t } = useTranslation();
    
  return (
    <div className='flex w-full'>
        <div className='w-[50%]'>
            <h1 className='text-4xl font-medium fira leading-[120%]'>{t("aboutTitle")} <span className='text-[#FEC80B]'>{t("aboutCompany")}</span> </h1>
            <p className='leading-[1.3] text-lg fira  mt-8'>{t("aboutText1")}</p>
                <br />
            <p className='leading-[1.3] text-lg fira mt-6'>{t("aboutText2")}</p>

            <Link className='flex justify-center fira text-base font-normal mt-12 rounded-sm gap-4 items-center w-[175px] h-[44px] bg-[#FEC80B]'>
            {t("readMore")}
            <img className='w-[20px]' src={slider} alt="" />
            </Link>
        </div>
        <div className='w-[50%]'>
            <img src={about} alt="" />
        </div>
    </div>
  )
}

export default About