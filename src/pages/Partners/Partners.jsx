import React, { useState } from 'react'
import partners from '../../data/partners.json'


const Partners = () => {
    const [openText,setOpenText]=useState(false)





  return (
    <section className='container'>

        <h1 className='text-[32px] leading-[1.18] font-medium fira '>Партнёры</h1>
        {
            partners.map((item)=>(
                <div className='py-6'>
                    <h3 className='text-[24px] leading-[1.2] font-medium fira mb-[32px]'>{item.name}</h3>
                    <p className={`max-w-[882px] text-[18px] leading-[1.5] ${openText ? '' : 'line-clamp-6' } fira mb-[10px]`}>{item.description}</p>
                    <a onClick={()=>setOpenText(!openText)} className='text-[18px] fira leading-[1.5] opacity-[0.5] underline text-[#000000] ' href="">{item.link}</a>
                    <a className='text-[18px] fira leading-[1.5] opacity-[0.5] underline text-[#000000]' href={item.url}>{item.url}</a>
                </div>
            ))
        }

    </section>
  )
}

export default Partners







