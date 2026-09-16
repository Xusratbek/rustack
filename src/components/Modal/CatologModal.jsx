import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const CatologModal = ({catalogModal,aboutModal,mediaModal}) => {

  return (
    <div className={`${catalogModal || aboutModal || mediaModal ? 'block' : 'hidden'} absolute w-full duration-300 bg-[#F9F9F9]`}>
        <div className='container flex justify-between'>
            
                <div className='flex flex-col gap-4'>
                <h3 className='fira font-extrabold text-2xl '>Categories</h3>
                <ul className='flex flex-col gap-4 [&>a]:hover:text-[#fec80b] [&>a]:duration-200 fira text-base font-normal leading-[130%] '>
                        <Link>Curtain cars</Link>
                        <Link>Truck-mounted cranes</Link>
                        <Link>Fuel tankers</Link>
                        <Link>Truck-mounted hydraulic lifts</Link>
                        <Link>Tank trucks</Link>
                        <Link>Car tow trucks</Link>
                        <Link>Flatbed trucks</Link>
                        <Link>Insulated vans</Link>
                        <Link>Container ships</Link>
                        <Link>Hooklifts</Link>
                        <Link>Dump trucks</Link>
                        <Link>ADR vehicles category </Link>
                </ul>

            </div>
            <div className='flex flex-col gap-4'>
                <h3 className='fira font-extrabold text-2xl ' >About Us</h3>
                <ul className='flex flex-col gap-4 [&>a]:hover:text-[#fec80b] [&>a]:duration-200 fira text-base font-normal leading-[130%]'>
                    <Link>About Rustrak LLC</Link>
                    <Link>News</Link>
                    <Link>Our partners</Link>
                    <Link>Production</Link>
                    <Link>For suppliers and partners</Link>
                    <Link>Reviews</Link>
                    <Link>Certificates</Link>
                    <Link>Vacancies</Link>
                    <Link>Credit and leasing</Link>
                </ul>

            </div>
            
            
                <div className='flex flex-col gap-4'>
                    <h3 className='fira font-extrabold text-2xl '>Media</h3>
                    <ul className='flex flex-col gap-4 [&>a]:hover:text-[#fec80b] [&>a]:duration-200 fira text-base font-normal leading-[130%]'>
                        <Link>Photo gallery</Link>
                        <Link>Video</Link>
                        <Link>Advertising materials</Link>
                        <Link>Information materials</Link>
                    </ul>
                </div>  
                <div className='flex flex-col gap-4 [&>a]:hover:text-[#fec80b] [&>a]:duration-200 fira text-2xl font-extrabold leading-[160%] '>
                   <NavLink className='fira font-extrabold text-2xl  '>Service</NavLink>
                   <NavLink className='fira font-extrabold text-2xl '>Repair</NavLink>
                   <NavLink className='fira font-extrabold text-2xl '>News</NavLink>
                   <NavLink className='fira font-extrabold text-2xl '>Contacts</NavLink>
                </div>


            

        </div>

    </div>
  )
}

export default CatologModal