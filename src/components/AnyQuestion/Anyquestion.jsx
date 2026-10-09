import React from 'react'
import anyQuestion from "../../assets/images/anyquestion1.webp"

const Anyquestion = () => {
    return (
        <section className='relative overflow-hidden px-2 items-center bg-[#f2f2f2] '>
            <div className='container '>
                <div className='py-14'>
                    <h2 className='fira text-[42px] leading-[1.19] font-medium '>ОСТАЛИСЬ ВОПРОСЫ?</h2>
                    <p className='fira text-lg leading-1.5 py-2 '>Оставьте свои контактные данные, и мы перезвоним Вам в ближайшее время</p>
                    <form className='flex gap-4 items-end pt-10'>
                        <div className='flex flex-col'>
                            <label className='text-sm leading-[110%] mb-[4px] '>Ваше имя *</label>
                            <input placeholder='Иван' className='w-[317px] py-[11px] px-[12px] outline-none h-[44px] border rounded-sm' type="text" />
                        </div>
                        <div className='flex flex-col'>
                            <label className='text-sm leading-[110%] mb-[4px] ' >Телефон *</label>
                            <input placeholder='+7' className='w-[317px] py-[11px] px-[12px] outline-none h-[44px] border rounded-sm' type="text" />
                        </div>
                        <button className='bg-[#fec80b] rounded-sm w-[140px] h-[46px]'>Отправить</button>
                    </form>
                    <div className='flex gap-1 items-center pt-5'>
                        <p className='fira text-sm leading-[1] opacity-[0.4]'>
                            Нажимая на кнопку отправить

                        </p>
                        <a className='underline text-[#551A8B] text-sm hover:no-underline ' href="">Вы соглашаетесь на обработку персональных данных</a>


                    </div>

                </div>
                <img className='h-[100%] absolute top-1 left-[70%] ' src={anyQuestion} alt="" />

            </div>

        </section>
    )
}

export default Anyquestion






