import React from 'react'

const Products = () => {
  return (
    <div className='bg-[#f9f9f9]'>
        <div className='flex justify-between items-center'>
            <h2 className='fira font-medium text-4xl'>Categories</h2>
                <div className='flex gap-4'>
                    <button id='category-prev' className='border-1 hover:bg-[#FEC80B] transition-all duration-300 ease-in-out w-[39px] rounded-sm flex items-center justify-center h-[39px] border-[#000000]'>
                        {/* <img src={left} alt="left-btn" /> */}
                    </button>
                    <button id='category-next'  className='border-1 w-[39px]  hover:bg-[#FEC80B] transition-all duration-300 ease-in-out rounded-sm flex items-center justify-center h-[39px] text-center border-[#000000]'>
                        {/* <img src={right} alt="right-btn" /> */}
                    </button>
                    </div>
        </div>

    </div>
  )
}

export default Products









