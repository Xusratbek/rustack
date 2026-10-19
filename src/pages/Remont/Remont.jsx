import React from 'react'
import remontcar1 from '../../assets/images/remontcar1.webp'
import remontcar2 from '../../assets/images/remontcar2.webp'
import remontcar3 from '../../assets/images/remontcar3.webp'
import remontcar4 from '../../assets/images/remontcar4.webp'
import remontcar5 from '../../assets/images/remontcar5.webp'
import remontcar6 from '../../assets/images/remontcar6.webp'
import remonthero from '../../assets/images/remonthero.webp'
import remont1 from '../../assets/images/remont1.webp'
import remont2 from '../../assets/images/remont2.webp'
import remont3 from '../../assets/images/remont3.webp'

import { ReactCompareSlider, ReactCompareSliderImage } from 'react-compare-slider';


const Remont = () => {

    return (
        <section className='container pb-36'>
            <div >
                <h1 className='text-[32px] fira leading-[1.18] font-medium mb-[32px]'>
                    Ремонт шторных полуприцепов от компании «Рустрак» в Нижнем Новгороде
                </h1>
                <p className='text-[18px] fira leading-[1.5] max-w-[1250px]'>
                    Логистическая сфера опирается на устойчивую работу прицепной техники. Ремонт шторных полуприцепов обеспечивает восстановление работоспособности конструкции после интенсивной эксплуатации. Наши мастера учитывают конструктивные особенности узлов и применяют проверенные методы обслуживания. Компания «Рустрак» в Нижнем Новгороде предлагает сервис, ориентированный на качество и долговечность оборудования. Своевременные технические мероприятия поддерживают стабильное состояние прицепов при интенсивных нагрузках. Надёжный подход к обслуживанию формирует уверенность в бесперебойной работе техники.
                </p>
                <div className='flex gap-6 justify-center mt-6'>
                    <img className='w-[500px] h-[336px] rounded-sm ' src={remontcar1} alt="" />
                    <img className='w-[500px] h-[336px] rounded-sm' src={remontcar2} alt="" />
                </div>
                <div className='flex justify-center mt-6'>
                    <button className='bg-[#fec80b]  fira font-bold w-[310px] h-[42px] text-[16px] rounded-[5px] uppercase'>Рассчитать стоимость ремонта</button>
                </div>
            </div>

            <div>
                <h2 className='text-[22px] fira font-bold mt-[20px] mb-[12px] leading-[1.5] '>Наши услуги</h2>
                <p>Компания «Рустрак» выполняет полный ремонт полуприцепов в Нижнем Новгороде после повреждений или выхода из строя. Мы восстанавливаем конструкцию прицепа, исправляем каркас и боковые тенты, ремонтируем двери, замки и механизмы открывания, а также восстанавливаем пол и борта прицепа. Все работы выполняются с высокой точностью и соблюдением стандартов качества, что гарантирует долговечность восстановленных элементов.</p>
                <p> <strong>Важно:</strong> ремонт ходовой, двигателя, замена масел и плановое техническое обслуживание не производятся. </p>


            </div>
            <div className='flex justify-center gap-6 pt-8 pb-2'>
                <ReactCompareSlider className='w-[600px] rounded-lg h-[400px] object-cover'
                    itemOne={<ReactCompareSliderImage src={remontcar3} alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src={remontcar4} alt="Image two" />}
                />

                <ReactCompareSlider className='w-[300px] rounded-lg h-[400px] object-cover'
                    itemOne={<ReactCompareSliderImage src={remontcar5} alt="Image one" />}
                    itemTwo={<ReactCompareSliderImage src={remontcar6} alt="Image two" />}
                />

            </div>
            <div className='py-2'>
                <h2 className='text-[22px] fira leading-[1.5] font-semibold'>Преимущества компании «Рустрак»</h2>
                
                        <div >
                            <div className='flex   gap-4 py-2  items-start'>
                                <p className='text-[#fec80b] text-[16px]'>♦</p>
                                <p className='max-w-[1124px]'>Большая производственная база – позволяет одновременно выполнять несколько крупных заказов и обслуживать большое количество техники.</p>

                            </div>
                            <div className='flex gap-4 py-2  items-start'>
                                <p className='text-[#fec80b] text-[16px]'>♦</p>
                                <p className='max-w-[1124px]'>Вместительные цеха – обеспечивают удобство работы с крупногабаритными полуприцепами и комфорт для сотрудников.</p>

                            </div>
                            <div className='flex gap-4 py-2  items-start'>
                                <p className='text-[#fec80b] text-[16px]'>♦</p>
                                <p className='max-w-[1124px]'>Профессиональные мастера – специалисты с опытом и знаниями гарантируют качественный и точный ремонт.</p>
                            </div>
                            <div className='flex gap-4 py-2  items-start'>
                                <p className='text-[#fec80b] text-[16px]'>♦</p>
                                <p className='max-w-[1124px]'>Полный цикл производства – все работы выполняются на месте, от диагностики до финальной сборки, без привлечения сторонних подрядчиков.</p>
                            </div>
                            <div className='flex gap-4 py-2  items-start'>
                                <p className='text-[#fec80b] text-[16px]'>♦</p>
                                <p className='max-w-[1124px]'>Опыт 17 лет – долгий срок работы на рынке подтверждает надёжность и компетентность компании.</p>

                            </div>
                            <div className='flex gap-4 py-2  items-start'>
                                <p className='text-[#fec80b] text-[16px]'>♦</p>
                                <p className='max-w-[1124px]'>Гарантия на ремонт – обеспечивает уверенность в долговечности и качестве выполненных работ.</p>
                            </div>

                        </div>
                    
            </div>
            <div>
                <img src={remonthero} alt="" />
            </div>
            <div className='flex w-full py-6'>
                <img className='w-[33.3%]' src={remont1} alt="" />
                <img className='w-[33.3%]' src={remont2} alt="" />
                <img className='w-[33.3%]' src={remont3} alt="" />

            </div>
            <div className='flex justify-center'>
                <button className='w-[310px] h-[42px] fira text-[16px] font-bold cursor-pointer bg-[#fec80b] rounded-[5px]'>Рассчитать стоимость ремонта</button>
            </div>
            <div className='py-4'>
                <h2 className='text-[22px] fira leading-[1.5] font-bold'>Качественный сервис для полуприцепов</h2>
                <p className='max-w-[1260px] py-2 fira  text-[18px] leading-[1.5]'>Ремонт шторных полуприцепов помогает продлить срок службы техники и сохранить её функциональность. Обратитесь к нашей команде, чтобы получить надежное и аккуратное обслуживание. Компания «Рустрак» в Нижнем Новгороде выполняет работы с вниманием к деталям и строгими стандартами качества. Доверьте нам технические задачи и получите результат, который оправдает ожидания. Запланируйте обслуживание заранее и убедитесь в удобстве нашего сервиса. Для начала сотрудничества свяжитесь с нами любым удобным способом, и мы поможем организовать все быстро и профессионально.</p>

            </div>

        </section>
    )
}

export default Remont