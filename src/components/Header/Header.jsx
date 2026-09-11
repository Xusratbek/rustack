import logo from '../../assets/images/logo.png'
import arrow from '../../assets/icons/arrow.png'
import phone from '../../assets/icons/phone.svg'
import { useState } from 'react'


// import { useTranslation } from 'react-i18next'



const Header = () => {
  // const { t } = useTranslation()

  const [hoursModalOpen,setHoursModalOpen]=useState(false)




  return (
    <>
    <header className='container pt-3.5 pb-2 flex justify-between w-full  '>
        <div className='flex items-center gap-1.5' >
          
            <a href="">
                <img src={logo} alt="logo" />
            </a>
            <div className='h-5.75 w-0.5 bg-[#FEC80B]'>

            </div>
            <a  className='fira text-[14px] leading-none max-w-44 text-[#000000]' href="">

            production and sale of   special-purpose vehicles                        
          </a>
          
        </div>

        <div className='flex gap-[60px]'>
          <div className='flex flex-col'>
            <button  onClick={() => setHoursModalOpen((v) => !v)} className='flex w-full items-center justify-end gap-1 '>
              <span className='max-w-5xl text-[16px] leading-[1.3]'> Opening hours</span>
              <img className='transition-transform duration-300 ease-out'  style={{ transform: hoursModalOpen ? "rotate(180deg)" : "rotate(0deg)" }} src={arrow} alt="arrow" />
            </button>
            <div className={hoursModalOpen ? "flex" : "hidden"}>
                    cfgvhjbk
            </div>
            <span className='text-[15px] leading-[1.13]  text-[#a2a2a2]'>Nizhny Novgorod, Torfyanaya Street, 35</span>
          </div>


          <div className='flex gap-4'>
            <div className='flex flex-col'>
            <div className='flex w-full items-center justify-end gap-1 '>
              <span className='max-w-5xl text-[#a2a2a2] text-[16px] leading-[1.3]'> For regions:</span>
              <a className='text-[#a2a2a2] text-[15px] leading-[1.13]' href="tel:88005110525">8 (800)-511-05-25</a>
            </div>
            <div className='flex w-full items-center justify-end gap-1 '>
            <span className='text-[15px] leading-[1.13]  text-[#a2a2a2]'>Nizhny Novgorod:</span>
              
              <a className='text-[#a2a2a2] text-[15px] leading-[1.13] ' href="tel:88005110525">8 (831) 235-25-51</a>
            </div>
          </div>
          <button className='bg-[#FEC80B] px-3 py-2 rounded-full '>
            <img src={phone} alt="" />
          </button>
          </div>

          
          
          
          
          

        </div>
        
    </header>
    <hr className='text-[#FEC80B]' />
    

    
    </>
  )
}

export default Header