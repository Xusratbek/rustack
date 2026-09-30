import React from 'react'
import { CloseOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';
import { useTranslation } from "react-i18next";


const Modal = ({closeCallModal,callModal}) => {
  const { t } = useTranslation();
  
  return (
    <div onClick={closeCallModal} className={`bg-[#00000099] z-9 items-center justify-center absolute inset-0 top-0 left-0 ${callModal ? 'flex' : 'hidden' }`}>
        <div onClick={(e)=>e.stopPropagation()} className='z-10 mt-6 bg-white rounded-md'>
          <div className='flex justify-end p-2'> 
            <CloseOutlined style={{fontSize:"28px"}} onClick={closeCallModal} /> 
          </div>
          <div className='py-6 '>
            <div className='text-[#000000] flex flex-col items-center '>
            <h3 className='fira font-medium text-3xl leading-[120%]'>{t("request")}</h3>
            <p className='fira font-normal text-base leading-[130%] '>{t("ourManager")}</p>
          </div>
          <form className='px-16 py-[40px] '>
            <div className='flex py-2 flex-col'>
              <label className='text-sm leading-none text-[#000000] mb-[5px]' htmlFor="">{t("yourName")} *</label>
              <input className='border rounded-sm py-2 pl-3 pr-[41px] border-solid outline-none focus:border-[#FEC80B] focus:shadow-[0px_0px_8px_rgba(254,200,11,0.4)] border-[#a2a2a2]' type="text" placeholder={t("yourNameInput")} />
            </div>
            <div className='flex flex-col'>
              <label className='text-sm leading-none text-[#000000] mb-[5px]' htmlFor="">{t("phoneNumber")} *</label>
              <input className='border rounded-sm py-2 pl-3 pr-[41px] border-solid  outline-none focus:border-[#FEC80B] focus:shadow-[0px_0px_8px_rgba(254,200,11,0.4)] border-[#a2a2a2] ' type="tel" placeholder={t("phoneNumberInput")} />

            </div>
            <div className='mt-4 flex gap-2'>
              <input type='checkbox' />
              <p className='fira text-sm'>{t("agree")} <a className='text-[#551A8B] ' href=''>{t("processing")}</a> </p>

            </div>
            <button className='bg-[#FEC80B] mt-10 fira leading-[110%] w-full py-4 rounded-md '>{t("submitRequest")}</button>
            <div className='flex flex-col text-xs pb-8 leading-[1.3] text-center mt-4'>
              <p>{t("forRegions")}: 8 (800) 511-05-25</p>
              <p>{t("nizhnyNovgorod")}: 8 (831) 235-25-17</p>
            </div>
          </form> 
          </div>
        </div>
    </div>
  )
}

export default Modal