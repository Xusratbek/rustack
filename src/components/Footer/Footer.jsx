import React from 'react'
import qr from '../../assets/images/qr.webp'
import { Link } from 'react-router-dom'
import max from '../../assets/icons/max.svg'
import telegram from "../../assets/icons/telegram.svg"
import vk from "../../assets/icons/vk.svg"
import rutube from "../../assets/icons/rutube.png"
import youtube from "../../assets/icons/youtube.png"
import zen from "../../assets/icons/zen.png"







const Footer = () => {
  return (
    <section className='bg-[#000000]'>
      <div className='container py-12'>
        <div className='w-full flex justify-between'>
          <div className='flex flex-col gap-1'>
            <span className='text-white fira text-[16px] leading-[1.3] font-medium '>Тел/факс: <a href="tel:88312352517">8 (831) 235-25-17</a></span>

            <span className='text-white fira text-[16px] font-medium'>Email: <a className='text-white' href="mailto:info+8425@rtrf.ru">info+8425@rtrf.ru</a></span>

            <span className='text-white fira  text-[16px] font-medium leading-[1.3]  '>г. Нижний Новгород ул. Торфяная, 35 </span>
            <button className='w-[184px] my-3 h-[44px] bg-[#FEC80B] border-none rounded-sm  '>Заказать звонок</button>
            <img className='w-[180px] h-[143px] my-2' src={qr} alt="" />
          </div>
          <div className='flex gap-[160px]'>
            <div>
              <span className='text-white'> О нас</span>
              <div className='flex gap-24 mt-6'>
                <ul className='flex flex-col gap-3 text-white text-[14px] leading-[1] opacity-[0.9] transition-all duration-300 ease-in-out'>
                  <Link >О компании ООО «Рустрак»</Link>
                  <Link >Новости</Link>
                  <Link >Наши партнёры</Link>
                  <Link>Производство</Link>
                  <Link>Поставщикам и партнёрам</Link>
                  <Link> Отзывы</Link>
                  <Link> Сертификаты</Link>
                </ul>
                <ul className='flex flex-col gap-3 text-white text-[14px] leading-[1] opacity-[0.9] transition-all duration-300 ease-in-out '>
                  <Link> Вакансии</Link>
                  <Link> Кредит и лизинг</Link>
                  <Link> Сервис</Link>
                  <Link> Ремонт</Link>
                  <Link> Контакты</Link>
                 

                </ul>
              </div>
            </div>
            <div>
              <span className='text-white'> Медиа</span>
              <ul className='flex flex-col gap-3 mt-6  text-white text-[14px] leading-[1] opacity-[0.9] transition-all duration-300 ease-in-out'>
                <Link>Фотогалерея</Link>
                <Link>Видео</Link>
                <Link>Рекламные материалы</Link>
              </ul>
            </div>

            

          </div>

        </div>
        <div className='w-full mt-6 flex '>
          <div>
             <p className='text-white fira text-[14px] leading-[1.14] opacity-[0.4]'>2009 - 2026 © Rus - Trucks </p>
            <p className='max-w-[447px] fira text-[14px] leading-[1.14] opacity-[0.4] text-white'>Информация на сайте не является публичной офертой, определяемой согласно статье 435 Гражданского кодекса РФ и носит исключительно информационный характер.</p>
    
          </div>
          <div className='flex gap-4 mx-auto'> 
           <a href="https://max.ru/id5257099304_biz"> <img className='w-[30px] h-[30px]' src={max} alt="" /></a>
            <a href="https://t.me/rustruckrussia"><img className='w-[30px] h-[30px]' src={telegram} alt="" /></a>
            <a href="https://vk.ru/rustruck"><img className='w-[34px] h-[34px]' src={vk} alt="" /></a>
            <a href="https://rutube.ru/channel/31838454/"><img className='w-[34px] h-[34px]' src={rutube} alt="" /></a>
            <a href="https://www.youtube.com/channel/UC0dOSenU7s7mdzvnGQMyzkQ"><img className='w-[42px] h-[34px]' src={youtube} alt="" /></a>
            <a href="https://dzen.ru/rustruck?utm_referrer=rtrf.ru"><img className='w-[34px] h-[34px]' src={zen} alt="" /></a>
          </div>
             </div>

      </div>
    </section>
  )
}

export default Footer