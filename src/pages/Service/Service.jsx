import React from 'react'

import servicelogo from '../../assets/images/servicelogo.png'

const Service = () => {
    return (
        <section className='container'>
            <div className='flex justify-between max-xl:px-4 '>
                <div>
                    <h1 className='text-[32px] fira leading-[1.18] font-medium max-w-[874px] mb-[32px]'>Сервис по гарантийному ремонту автоспецтехники РусТрак</h1>
                    <p className='text-[18px] fira leading-[1.5] max-w-[882px]'>После приобретения продукции в ООО «Рустрак» Вы всегда можете обратиться за помощью по любым вопросам, связанными с гарантийным обслуживанием, настройкой и ремонтом транспорного средства, поставкой дополнительного обурудования, а также внесением доработок под задачи клиента. Вы можете обратиться за технической поддержкой и консультацией по эксплуатации в любое время и в любой срок после заключения контракта.</p>
                    <div className='my-20 flex flex-col gap-6'>
                        <h3 className='text-[24px] font-medium fira leading-[1.2] mb-[12px]'>Как получить поддержку?</h3>
                        <div className='pl-[32px] flex flex-col gap-5 '>
                            <div className='flex gap-4 items-start'>
                                <div className='w-[38px] h-[38px] text-[24px] bg-[#FEC80B] font-semibold leading-[1] rounded-[50%] flex items-center justify-center'>1</div>
                                <p className='max-w-[786px] fira text-[18px] leading-[1.5] font-normal'> <a className='underline' href="https://rtrf.ru/service/upload/RKLMACTRT26.pdf">Заполнить Рекламационный акт</a>  с внесением подписи ответственного лица и печати организации, подробно описать характер отказа. Приложить фото: шильды в пассажирской двери, шильды вышедшего из строя оборудования, первая страница ПТС.</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='w-[38px] h-[38px] text-[24px] bg-[#FEC80B] font-semibold leading-[1] rounded-[50%] flex items-center justify-center'>2</div>
                                <p className='text-[18px] fira leading-[1.5] font-normal'>Сфотографировать неисправности, а также общий вид изделия в целом.</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <div className='w-[38px] h-[38px] text-[24px] bg-[#FEC80B] font-semibold leading-[1] rounded-[50%] flex items-center justify-center'>3</div>
                                <p className='fira max-w-[711px] '>Отправить заполненный акт, копию ПТС, фотографии неисправностей по электронной почте: <a href="mailto:">kb1@rtrf.ru</a> </p>
                            </div>
                        </div>

                    </div>
                    <p className='mb-[35px] text-[18px] max-w-[882px] fira leading-[1.5] '>После этого специалисты гарантийной службы свяжутся с владельцем и предложат варианты организации ремонта.</p>
                    <p className='text-[18px] leading-[1.5]  max-w-[882px] '>Любые вопросы относительно гарантийного обслуживания техники производства «РусТрак» можно задать по телефону <a className='text-[18px] leading-[1.5] fira' href="tel:88312250055" >8 (831) 225-00-55 (доб 610)</a> или по электронной почте:  <a href="mailto:kb1@rtrf.ru">kb1@rtrf.ru</a> </p>

                </div>

                <div className='mt-24'>
                    <div className='w-[311px] h-[409px] border border-[#EBEBEB] rounded-[4px] py-6 flex flex-col justify-between h-[409px] shadow-[0px_0px_24px_0px_rgba(150,150,150,0.12)]'>
                        <div className='flex flex-col gap-2 items-center justify-center '>
                            <img className='w-[150px] h-[150px]' src={servicelogo} alt="" />
                            <h2 className='fira font-medium text-[24px] leading-[120%]'>Дмитрий Волков</h2>
                            <p className='fira text-center text-[16px] leading-[130%] text-normal'>менеджер по вопросам гарантии и сервисного обслуживания</p>
                        </div>
                        <div className='flex flex-col items-center font-normal fira text-[16px] leading-[130%]'>
                            <a  href="tel:88312352517" >(831) 225-00-55 (доб 124)</a>
                            <a  href="mailto:info+8425@rtrf.ru">kb1@rtrf.ru</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Service