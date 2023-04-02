import React from 'react'
import { Typography } from '@/utils/constants'
import { svResource } from '@/public/svg/svexporter'
import Image from 'next/image'
import { Resources } from '@/public/images/exporter'

export default function WorkFlow2() {
  return (
    <div className='w-full rounded-md overflow-hidden sm:w-[475px] h-[580px]  mx-auto lg:mx-0 relative lg:right-8'>
          <Image src={svResource.flow1} alt="" className='w-full h-full object-cover relative lg:right-4 xl:right-8 '/>
          <div className='absolute inset-0 lg:right-4'>
            <div className='h-[80px] w-[80px] rounded-xl absolute top-16 right-4 sm:right-16 z-20 brandgradient text-white font-[500] text-[34px] flex items-center justify-center'>$5k</div>
            <div className='bg-white z-10 relative rounded-md mt-32 py-4 px-2 flex items-center w-[250px] mx-auto'>
              <Image src={svResource.Location} alt='' className='absolute right-4 top-8 h-fit w-fit'/>
              <div className='h-[44px] w-[44px] rounded-full relative overflow-hidden bg-[#515b63] shadow-2xl shadow-black/10 mr-6'>
                  <Image src={Resources.Person6} alt='' className='h-full w-full object-cover absolute left-1 -bottom-[5px]'/>
              </div>
              <div>
                <Image src={Resources.Bar15} alt='' className='h-fit w-fit block mb-2'/>
                <Image src={Resources.Bar16} alt='' className='h-fit w-fit block mb-1'/>
              </div>
            </div>
            <div className='bg-white rounded-md relative mt-3 py-4 px-2 flex items-center w-[250px] mx-auto'>
            <Image src={svResource.Location} alt='' className='absolute right-4 top-8 h-fit w-fit'/>
              <div className='h-[44px] w-[44px] rounded-full relative overflow-hidden bg-[#515b63] shadow-2xl shadow-black/10 mr-6'>
                  <Image src={Resources.Person7} alt='' className='h-full w-full object-cover absolute left-[2px] -bottom-[5px]'/>
              </div>
              <div>
                <Image src={Resources.Bar15} alt='' className='h-fit w-fit block mb-2'/>
                <Image src={Resources.Bar16} alt='' className='h-fit w-fit block mb-1'/>
              </div>
            </div>
            <div className='w-[350px] mx-auto'>
                <h1 className='text-center my-3'><span className='relative font-roboto text-[34px] text-brand-blue font-[500]'>Marketting</span></h1>
                <p className='relative w-full sm:w-10/12 mx-auto hero-paragraph text-base text-center'>{Typography.marketting}</p>
              </div>
          </div>
    </div>
  )
}
