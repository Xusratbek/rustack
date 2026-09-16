import logo from '../../assets/images/logo.png'
import arrow from '../../assets/icons/arrow.png'
import phone from '../../assets/icons/phone.svg'
import cart from '../../assets/icons/cart.svg'
import favorites from '../../assets/icons/favorites.svg'
import { useState, useEffect, useRef } from 'react'
import Modal from '../Modal/Modal'
import { NavLink } from 'react-router-dom'
import { SearchOutlined } from '@ant-design/icons';
import { DownOutlined } from '@ant-design/icons';
import { Dropdown, Space } from 'antd';
import CatologModal from '../Modal/CatologModal'
import { useTranslation } from 'react-i18next'



const Header = () => {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.language;


  const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        localStorage.setItem('i18nextLng', lang);
        window.location.reload();
    };

  const langs = [
    {key:'0',code:'uz',label:'Uz'},
    {key:'1',code:'ru',label:'Ru'},
    {key:'2',code:'us',label:'En'}
  ] 

  const [selectedCode, setSelectedCode] = useState('uz');
  const [hoursModalOpen, setHoursModalOpen] = useState(false)
  const hoursModalRef = useRef(null)
  const [callModal, setCallModal] = useState(false)

  // 
  const [catalogModal,setCatalogModal]=useState(false)
  const [aboutModal,setAboutModal]=useState(false)
  const [mediaModal,setMediaModal]=useState(false)

  const openCatologModal = () => {
    setCatalogModal(true)
  }

  const closeCatalogModal = () => {
    setCatalogModal(false)
  }



  const handleChange = value => {
    console.log(`selected ${value}`);
  };

  const openHoursModal = () => {
    setHoursModalOpen(true)
  }

  const closeHourseModal = () => {
    setHoursModalOpen(false)
  }

  useEffect(() => {
    if (!hoursModalOpen) return

    const handleClickOutside = (e) => {
      if (hoursModalRef.current && !hoursModalRef.current.contains(e.target)) {
        closeHourseModal()
      }
    }

    window.addEventListener('click', handleClickOutside)

    return () => {
      window.removeEventListener('click', handleClickOutside)
    }
  }, [hoursModalOpen])

  const openCallModal = () => {
    setCallModal(true)
  }

  const closeCallModal = () => {
    setCallModal(false)
  }

const items = langs.map(lang => ({
  key: lang.key,
  label: (
    <span className='flex items-center gap-2'>
      <span className={`fi fi-${lang.code} `}></span>{lang.label}
    </span>
  ),
}));
 const handleMenuClick = (e) => {
  console.log(e)

    const clicked = langs.find(item => item.key === e.key);
    if (clicked) {
      setSelectedCode(clicked.code);
      
    }
  };

  const toggleCatalog = () => {
    setCatalogModal(prev => !prev);
  };


  return (
    <>
      <header className='container pt-3.5 max-lg:pt-3 max-lg:pb-1 max-lg:px-4 max-xl:px-[1%] pb-2 flex justify-between w-full  '>
        <div className='flex items-center gap-1.5' >

          <a href="">
            <img src={logo} alt="logo" />
          </a>
          <div className='h-5.75 w-0.5 bg-[#FEC80B] max-lg:hidden '>

          </div>
          <a className='fira text-[14px] max-lg:hidden leading-none max-w-44 text-[#000000]' href="">

            production and sale of   special-purpose vehicles
          </a>

        </div>

        <div className='flex gap-[60px]'>
          <div ref={hoursModalRef} className='flex flex-col relative'>
            <button onClick={() => setHoursModalOpen((v) => !v)} className='flex w-full max-lg:hidden items-center justify-end gap-1 '>
              <span className='max-w-5xl text-[16px] leading-[1.3]'> Opening hours</span>
              <img className='transition-transform duration-300 ease-out' style={{ transform: hoursModalOpen ? "rotate(180deg)" : "rotate(0deg)" }} src={arrow} alt="arrow" />
            </button>

            <span className='text-[15px] max-lg:max-w-42 max-md:hidden text-right leading-[1.13]  text-[#a2a2a2]'>Nizhny Novgorod, Torfyanaya Street, 35</span>
            <div onClick={(e) => e.stopPropagation()} className={hoursModalOpen ? "flex flex-col gap-1 absolute right-0 top-5 text-end bg-white p-[14px] shadow-[0px_0px_24px_rgba(150,150,150,0.12)]" : "hidden"}>
              <div className='fira text-[14px] font-normal leading-none'>
                <span > Mon-Fri:</span>
                <span> 8:00 to 18:00 </span>
              </div>
              <div className='fira text-[14px] text-left '>
                <span> Sat-Sun:</span>
                <span> Closed</span>
              </div>
            </div>
          </div>


          <div className='flex gap-4'>
            <div className='flex flex-col max-md:hidden '>
              <div className='flex w-full items-center justify-end gap-1 '>
                <span className='max-w-5xl text-[#a2a2a2] text-[16px] leading-[1.3]'> For regions:</span>
                <a className='text-[#a2a2a2] text-[15px] leading-[1.13]' href="tel:88005110525">8 (800)-511-05-25</a>
              </div>
              <div className='flex w-full items-center justify-end gap-1 '>
                <span className='text-[15px] leading-[1.13]  text-[#a2a2a2]'>Nizhny Novgorod:</span>

                <a className='text-[#a2a2a2] text-[15px] leading-[1.13] ' href="tel:88005110525">8 (831) 235-25-51</a>
              </div>
            </div>
            <button onClick={openCallModal} className='bg-[#FEC80B] px-3 py-2 rounded-full '>
              <img src={phone} alt="" />
            </button>
          </div>
        </div>
      </header>
      <hr className='text-[#FEC80B]' />
      <div className='container flex items-center gap-10 justify-between container pt-4 pb-8 '>
        <div >
          <button onClick={toggleCatalog} className='flex gap-4 px-5 py-2.5 rounded-sm border-none fira font-normal text-lg leading-[110%]  bg-[#fec80b] hover:bg-yellow items-center'>
            <div className='flex flex-col gap-1 items-center'>
              <div className={`${catalogModal ? 'rotate-[45deg] relative top-1' : ''} burger-line `}></div>
              <div className={`${catalogModal ? 'hidden' : ' '} burger-line duration-200`} ></div>
              <div className={`${catalogModal ? 'rotate-[-45deg] relative top-[-2px]' : ''} burger-line`} ></div>

            </div>
            Catalog

          </button>
        </div>
        <nav className='max-lg:hidden'>
          <ul className='flex justify-center gap-10 fira font-normal text-base leading-[130%]'>
            <li className='flex gap-1 items-center'>
              <button onClick={()=>setAboutModal((e)=> !e )} className='fira flex items-center gap-2 font-normal text-base leading-[130%]'>
                About Us
                <img className='transition-transform duration-300 ease-out' style={{ transform: aboutModal ? "rotate(180deg)" : "rotate(0deg)" }} src={arrow} alt="arrow" />
            
              </button>
              </li>
            <li className='flex gap-1 items-center'>
              <button onClick={()=>setMediaModal((e)=>!e)} className='fira flex items-center gap-2 font-normal text-base leading-[130%]'>
                Media
               <img className='transition-transform duration-300 ease-out' style={{ transform: mediaModal ? "rotate(180deg)" : "rotate(0deg)" }} src={arrow} alt="arrow" />
            
              </button>
              </li>
            <li>
              <NavLink className='fira font-normal text-base leading-[130%]' to={""}> Service </NavLink>
            </li>
            <li>
              <NavLink className='fira font-normal text-base leading-[130%]' to={""}> Repair </NavLink>
            </li>
            <li>
              <NavLink className='fira font-normal text-base leading-[130%]' to={""}> News </NavLink>
            </li>
            <li>
              <NavLink className='fira font-normal text-base leading-[130%]' to={""}> Contacts </NavLink>
            </li>

          </ul>
        </nav>

        <div className='flex gap-5 items-center'>
          <div className='w-[312px] py-2 rounded-3xl flex focus-within:shadow-[0px_0px_8px_rgba(254,200,11,0.4)] px-4 border border-solid border-[#FEC80B]'>
            <input className='outline-none w-[93%]' type="text" />
            <button>
              <SearchOutlined className='text-xl' />
            </button>
          </div>
          <NavLink to={""} > <img src={cart} alt="" /> </NavLink>
          <NavLink to={""} > <img src={favorites} alt="" /> </NavLink>
           <Dropdown menu={{ items, onClick: handleMenuClick }} trigger={['click']}>
        <Space >
          <span className={`fi fi-${selectedCode} w-12 h-12`}></span>
          <DownOutlined />
        </Space>
    </Dropdown>
        </div>
      </div>
      <Modal closeCallModal={closeCallModal} callModal={callModal} />
      <CatologModal catalogModal={catalogModal} aboutModal={aboutModal} mediaModal={mediaModal}  />
    </>
  )
}

export default Header