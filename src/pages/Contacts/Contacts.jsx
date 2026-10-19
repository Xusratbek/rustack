import React from 'react'
import contactdata from '../../data/contact.json'

const Contacts = () => {

  return (
    <section className='container pb-10'>
      <div>
        <h1 className='text-[32px] fira leading-[1.18] font-medium mb-[32px]'>Контакты производителя автоспецтехники РусТрак</h1>
        <div className='w-full flex '>
          <div className='w-[30%] flex flex-col justify-between bg-[#FEC80B] p-[32px]'>
            <div>
              <p className='text-[18px] fira  leading-[1.5]'>
                603035 г. Нижний Новгород, <br />
                ул. Торфяная, д. 35</p>
            </div>
            <div className='text-[18px] leading-[1.5] fira '>
              <div>
                <b>Нижний Новгород: </b>
                <a href="tel:88312250055" >8 (831) 235-25-17</a>
              </div>
              <div>
                <b>Для регионов:  </b>
                <a href="tel:88005110525" > 8 (800)-511-05-25</a>
              </div>
              <div>
                <b>Электронная почта: </b>
                <a href="mailto:info+8425@rtrf.ru" > info+8425@rtrf.ru</a>

              </div>
            </div>
            <div>
              <b>Запись на техническое обслуживание: </b>
              <a href="tel:88312250055" >8 (831) 225-00-55</a>
            </div>

          </div>
          <iframe
            className='w-[70%]'
            src="https://maps.google.com/maps?q=Urganch,Uzbekistan&z=13&output=embed"
            width="100%"
            height="320"
            loading="lazy"
          />
        </div>
      </div>
      <div className='w-full mt-[130px]'>
        <h2 className='fira text-[32px] mb-[32px] leading-[1.18] font-medium '>Сотрудники</h2>
        <div className='grid grid-cols-4 gap-4'>
          {
            contactdata.map((item) => (
              <div className='shadow-[0_0_24px_rgba(150,150,150,0.12)] p-4  w-[312px] h-[369px] flex flex-col  justify-between bg-[#ffffff] border border-solid rounded-[8px] border-[#ebebeb]'>
                <div className='flex flex-col items-center '>
                  <img className='w-[139px] h-[139px]' src={item.img} alt="" />
                  <h4 className='text-[24px] text-center  leading-[1.2] font-medium fira '>{item.full_name}</h4>
                  <span className='text-[16px] text-center leading-[1.3] text-[#a2a2a2] fira'>{item.position}</span>
                </div>
                <div className='text-center text-[16px] leading-[1.3] fira flex flex-col '>
                  <a href={`tel:${item.phone}`} >{item.phone}</a>
                  <a href={`tel:${item.mobile}`} >{item.mobile}</a>
                  <a href={`mailto:${item.email}`} >{item.email}</a>
                </div>
              </div>

            ))
          }
        </div>

      </div>
    </section>
  )
}

export default Contacts








