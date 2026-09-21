import {useState} from 'react'
import { Link, NavLink } from 'react-router-dom'
import arrow from '../../assets/icons/arrow.png'



const CatologModal = ({catalogModal,aboutModal,mediaModal}) => {

    const [hoursModalOpen, setHoursModalOpen] = useState(false)
    const [aboutUsModalOpen,setAboutUsModalOpen]=useState(false)





  return (
    <div className={`${catalogModal || aboutModal || mediaModal ? 'block' : 'hidden'} absolute  w-full duration-300 bg-[#F9F9F9]`}>
        <div className='container px-4 py-2 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-md:gap-6  gap-8 overflow-y-auto'>
                <div className='flex flex-col gap-4'>
                <h3 onClick={()=>setHoursModalOpen((e)=>!e)} className='fira flex items-center gap-2 font-extrabold text-2xl '>
                    Categories
                    <img className=' hidden max-sm:block transition-transform duration-300 ease-out' style={{ transform: hoursModalOpen ? "rotate(180deg)" : "rotate(0deg)" }}  src={arrow} alt="arrow" />
                    
                </h3>
                <ul className={'flex flex-col gap-4 [&>a]:hover:text-[#fec80b] [&>a]:duration-200 fira text-base font-normal leading-[130%]'}>
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
                <h3 className='fira font-extrabold text-2xl flex items-center gap-2' >
                    About Us
                    <img className='hidden max-sm:block transition-transform duration-300 ease-out' style={{ transform: aboutUsModalOpen ? "rotate(180deg)" : "rotate(0deg)" }}  src={arrow} alt="arrow" />
                    
                    </h3>
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
                <div className='flex justify-between  max-lg:flex-col max-md:gap-4 max-lg:justify-start max-lg:gap-12'>
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
                   <NavLink className='fira font-extrabold text-2xl '>Service</NavLink>
                   <NavLink className='fira font-extrabold text-2xl '>Repair</NavLink>
                   <NavLink className='fira font-extrabold text-2xl '>News</NavLink>
                   <NavLink className='fira font-extrabold text-2xl '>Contacts</NavLink>
                </div>
                </div>


            

        </div>

    </div>
  )
}

export default CatologModal