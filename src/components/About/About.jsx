import React from 'react'
import about from '../../assets/images/about-truck.webp'
import { Link } from 'react-router-dom'
import slider from '../../assets/images/slider.svg'



const About = () => {
  return (
    <div className='flex w-full'>
        <div className='w-[50%]'>
            <h1 className='text-4xl font-medium fira leading-[120%]'>About <span className='text-[#FEC80B]'>Rustrak</span> </h1>
            <p className='leading-[1.3] text-lg fira  mt-8'>Our company occupies a leading position in the special <br />
                equipment market: every day, we contribute to the development <br />
                of the domestic automotive industry and the strengthening of <br />
                the Russian economy.</p>
                <br />
            <p className='leading-[1.3] text-lg fira mt-6'>RusTrak is a leading manufacturer of commercial vehicles and <br />
                specialized equipment. Our work is recognized and highly valued <br />
                by major Russian corporations and government agencies: we <br />
                supply specialized equipment to corporations such as Gazprom, <br />
                Rosatom, Rosseti, RSK MIG, and others.</p>

            <Link className='flex justify-center fira text-base font-normal mt-12 rounded-sm gap-4 items-center w-[175px] h-[44px] bg-[#FEC80B]'>
            Read more
            <img className='w-[20px]' src={slider} alt="" />
            </Link>
        </div>
        <div className='w-[50%]'>
            <img src={about} alt="" />
        </div>
    </div>
  )
}

export default About