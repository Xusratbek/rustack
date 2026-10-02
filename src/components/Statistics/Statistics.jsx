import React from 'react'
import { useTranslation } from 'react-i18next'

const Statistics = () => {
  const { t } = useTranslation();


  return (
    <div className='bg-[#FEC80B]   w-full mt-24'>
        <div className='flex justify-between container py-12'>
            <div>
                <h3 className='fira font-medium text-8xl leading-[100%]'>17</h3>
                <h5 className='fira font-medium text-3xl leading-[120%]'>{t("stats1Title")}</h5>
                <p className='fira font-normal text-lg leading-[150%] mt-6 max-w-[276px]'>{t("stats1Text")}</p>
            </div>
            <div>
            <h3 className='fira font-medium text-8xl'>85</h3>
            <h5  className='fira font-medium text-3xl leading-[120%]'>{t("stats1Title")}</h5>
            <p className='fira font-normal text-lg leading-[150%] mt-6 max-w-[276px]'>{t("stats2Text")}</p>
            </div>
            <div>
            <h3 className='fira font-medium text-8xl'>11</h3>
            <h5 className='fira font-medium text-3xl leading-[120%]'>{t("stats3Title")}</h5>
            <p className='fira font-normal text-lg leading-[150%] mt-6 max-w-[276px]'>{t("stats3Text")}</p>
            </div>
        </div>
    </div>
  )
}

export default Statistics






