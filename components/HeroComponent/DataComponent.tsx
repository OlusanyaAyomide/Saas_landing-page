import React from 'react'
import Image from 'next/image'
import { Resources } from '@/public/images/exporter'

export default function DataComponent() {
  return (
    <div className='absolute top-0 -left-[49px] z-20 md:left-[100px] lg:-left-4 xl:left-[50px] sm:left-4'>
          <div className='h-[280px] w-[340px] relative'>
            <Image src={Resources.GrowthRectangle} alt="" width={300.89} height={500} priority/>
            <div className='absolute z-20 top-4 h-[201px] left-[60px] w-[180px] px-6 py-8'>
              <div className='absolute h-[42px] w-[42px] -top-3 -right-3 rounded-full brandgradient p-[2px]'>
                <div className='bg-white rounded-full h-full w-full'>
                  <Image src={Resources.Person1} alt='' className='object-contain h-full w-full'/>
                </div>
              </div>
              <div className='font-roboto'>
                  <span className="block text-xl text-brand-blue text-center">Amanda M.</span>
                  <span className='block text-xl text-brand-blue text-center'>Data</span>
                </div>
              <span className="block text-sm text-center font-roboto text-brand-blue my-4">Your Growth</span>
              <span className="block mt-2 gradienttext font-[700] text-[30px] text-center">3,000</span>
            </div>
          </div>
    </div>
  
  )
}
