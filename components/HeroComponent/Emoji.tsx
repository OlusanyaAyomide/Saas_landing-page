import React from 'react'
import { Resources } from '@/public/images/exporter'
import Image from 'next/image'

export default function Emoji() {
  return (
    <div className='flex justify-around px-6 py-4'>
        <div className='w-[40px] h-[40px] relative'>
            <Image src={Resources.supCircle} alt="" className='h-fit w-fit absolute z-10'/>
            <Image src={Resources.SupEyeBrow} alt="" className='h-fit w-fit absolute z-20 left-2 top-2'/>
            <span className="absolute bg-black h-[4px] w-[4px] top-3 left-[9.3px] z-30 rounded-full"></span>
            <span className="absolute bg-black h-[4px] w-[4px] top-3 left-[24.45px] z-30 rounded-full"></span>
            <Image src={Resources.SupMouth} alt="" className='absolute h-fit w-fit z-20 top-4 left-[13px]'/>
        </div>
        <div className='w-[40px] h-[40px] relative'>
          <Image src={Resources.AngryCircle} alt="" className='h-fit w-fit absolute z-10'/>
          <Image src={Resources.AngryEyeBrow} alt="" className='absolute top-[14px]  left-1 z-20'/>
          <span className="absolute bg-black h-[4px] w-[4px] top-[19px] left-[9.3px] z-30 rounded-full"></span>
            <span className="absolute bg-black h-[4px] w-[4px] top-[19px] left-[23px] z-30 rounded-full"></span>
            <Image src={Resources.AngryMouth} className='absolute top-[27px] left-3  z-20' alt=""/>
        </div>
  
        <div className='w-[40px] h-[40px] relative'>
          <Image src={Resources.LoveCircle} alt="" className='absolute h-fit w-fit z-10'/>
          <Image src={Resources.LoveLove} alt="" className='absolute h-fit w-fit z-10 top-[9px] left-[7px]'/>
        </div>
    </div>
  )
}
