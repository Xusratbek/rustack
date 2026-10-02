import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import arrow from '../../assets/icons/arrow.png'
import { useTranslation } from 'react-i18next'


const CatologModal = ({ catalogModal, aboutModal, mediaModal }) => {

    const [hoursModalOpen, setHoursModalOpen] = useState(false)
    const [aboutUsModalOpen, setAboutUsModalOpen] = useState(false)
    const { t } = useTranslation();





    return (
        <div className={`${catalogModal || aboutModal || mediaModal ? 'block' : 'hidden'} absolute z-50 top-[19%]  w-full h-[100vh] duration-300 bg-[#F9F9F9]`}>
            <div className='container py-4 grid grid-cols-3 max-sm:grid-cols-1 max-md:grid-cols-2 max-md:gap-6  gap-8 overflow-y-auto'>
                <div className='flex flex-col gap-4'>
                    <h3 onClick={() => setHoursModalOpen((e) => !e)} className='fira flex items-center gap-2 font-extrabold text-2xl '>
                            {t("categories")}
                        <img className=' hidden max-sm:block transition-transform duration-300 ease-out' style={{ transform: hoursModalOpen ? "rotate(180deg)" : "rotate(0deg)" }} src={arrow} alt="arrow" />

                    </h3>
                    <ul className={'flex flex-col gap-4 [&>a]:hover:text-[#fec80b] [&>a]:duration-200 fira text-base font-normal leading-[130%]'}>
                        <Link>{t("curtain_cars")}</Link>
                        <Link>{t("truck_mounted_cranes")}</Link>
                        <Link>{t("fuel_tankers")}</Link>
                        <Link>{t("truck_mounted_hydraulic_lifts")}</Link>
                        <Link>{t("tank_trucks")}</Link>
                        <Link>{t("car_tow_trucks")}</Link>
                        <Link>{t("flatbed_trucks")}</Link>
                        <Link>{t("insulated_vans")}</Link>
                        <Link>{t("container_ships")}</Link>
                        <Link>{t("hooklifts")}</Link>
                        <Link>{t("dump_trucks")}</Link>
                        <Link>{t("adr_vehicles")}</Link>
                    </ul>

                </div>
                <div className='flex flex-col gap-4'>
                    <h3 className='fira font-extrabold text-2xl flex items-center gap-2' >
                        {t("aboutUs")}
                        <img className='hidden max-sm:block transition-transform duration-300 ease-out' style={{ transform: aboutUsModalOpen ? "rotate(180deg)" : "rotate(0deg)" }} src={arrow} alt="arrow" />

                    </h3>
                    <ul className='flex flex-col gap-4 [&>a]:hover:text-[#fec80b] [&>a]:duration-200 fira text-base font-normal leading-[130%]'>
                        <Link>{t("about_company")}</Link>
                        <Link>{t("news")}</Link>
                        <Link>{t("partners")}</Link>
                        <Link>{t("production")}</Link>
                        <Link>{t("suppliers_partners")}</Link>
                        <Link>{t("reviews")}</Link>
                        <Link>{t("certificates")}</Link>
                        <Link>{t("vacancies")}</Link>
                        <Link>{t("credit_leasing")}</Link>
                    </ul>
                </div>
                <div className='flex justify-between  max-lg:flex-col max-md:gap-4 max-lg:justify-start max-lg:gap-12'>
                    <div className='flex flex-col gap-4'>
                        <h3 className='fira font-extrabold text-2xl '>Media</h3>
                        <ul className='flex flex-col gap-4 [&>a]:hover:text-[#fec80b] [&>a]:duration-200 fira text-base font-normal leading-[130%]'>
                            <Link>{t("photo_gallery")}</Link>
                            <Link>{t("video")}</Link>
                            <Link>{t("advertising_materials")}</Link>
                            <Link>{t("information_materials")}</Link>
                        </ul>
                    </div>
                    <div className='flex flex-col gap-4 [&>a]:hover:text-[#fec80b] [&>a]:duration-200 fira text-2xl font-extrabold leading-[160%]'>
                        <NavLink className='fira font-extrabold text-2xl '>{t("service")}</NavLink>
                        <NavLink className='fira font-extrabold text-2xl '>{t("repair")}</NavLink>
                        <NavLink className='fira font-extrabold text-2xl '>{t("news")}</NavLink>
                        <NavLink className='fira font-extrabold text-2xl '>{t("contacts")}</NavLink>
                    </div>
                </div>




            </div>

        </div>
    )
}

export default CatologModal