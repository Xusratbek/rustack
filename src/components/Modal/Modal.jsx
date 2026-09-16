import React from 'react'
import { CloseOutlined } from '@ant-design/icons';
import { Checkbox } from 'antd';



const Modal = ({closeCallModal,callModal}) => {
  
  return (
    <div onClick={closeCallModal} className={`bg-[#0005] items-center justify-center absolute inset-0 top-0 left-0 ${callModal ? 'flex' : 'hidden' }`}>
        <div onClick={(e)=>e.stopPropagation()} className='z-10 bg-white rounded-md'>
          <div className='flex justify-end p-2'> 
            <CloseOutlined style={{fontSize:"28px"}} onClick={closeCallModal} /> 
          </div>
          <div className='px-22 py-[40px]  '>
            <div className='text-[#000000] flex flex-col items-center '>
            <h3 className='fira font-medium text-3xl leading-[120%]'>Request a call</h3>
            <p className='fira font-normal text-base leading-[130%] '>Our manager will contact you shortly.</p>
          </div>
          <form className='mt-[50px]'>
            <div className='flex py-2 flex-col'>
              <label className='text-sm leading-none text-[#000000] mb-[5px]' htmlFor="">Your name *</label>
              <input className='border rounded-sm py-2 pl-3 pr-[41px] border-[#a2a2a2]' type="text" placeholder='Ivan' />
            </div>
            <div className='flex flex-col'>
              <label className='text-sm leading-none text-[#000000] mb-[5px]' htmlFor="">Telephone *</label>
              <input className='border rounded-sm py-2 pl-3 pr-[41px] border-[#a2a2a2] ' type="tel" placeholder='+7' />

            </div>
            <div className='mt-4 flex gap-2'>
              <input type='checkbox' />
              <p className='fira text-sm'>I agree <a className='text-[#551A8B] ' href=''>to the processing of personal data</a> </p>

            </div>
            <button className='bg-[#FEC80B] mt-10 fira leading-[110%] w-full py-4 rounded-md '>Submit a request</button>
            <div className='flex flex-col text-xs pb-8 leading-[1.3] text-center mt-4'>
              <p>For regions: 8 (800) 511-05-25</p>
              <p>Nizhny Novgorod: 8 (831) 235-25-17</p>
            </div>
          </form> 
          </div>
        </div>
    </div>
  )
}

export default Modal