import React from 'react'
import { svResource } from '@/public/svg/svexporter'
import Image from 'next/image'

export default function Media() {
  return (
   <section className='mt-24 widepadding'>
      <h1 className='text-center px-4 w-fit mx-auto md:px-0 section-header'><span>Social Media Its Ways
      <span className='sm:block'> Of Our Excellence.</span></span></h1>
      <div className='mt-16 w-full sm:w-[445px] mx-auto bg-[#1C1E32] p-1 h-[60px] xl:h-[73px] pl-3 flex items-center rounded-[10px]'>
        <input type="text" placeholder='Email' className='w-full ml-2 pr-2 py-2 outline-none bg-transparent text-white'/>
        <div className='h-full relative'>
          <div className='absolute h-[96%] top-[1px] rounded-lg w-[40px] bg-white/60 right-[1px] z-20 flex justify-center items-center'>
            <Image src={svResource.ArrorR} alt='' className='w-fit h-fit'/>
          </div>
        <button className='w-[140px] sm:w-[197px] brandgradient text-white h-full rounded-[10px]'>Get Started
        </button>
        </div>
        <div className='flex w-fit mx-auto'>
          <div></div>
        </div>
      </div>        
   </section>
  )
}
