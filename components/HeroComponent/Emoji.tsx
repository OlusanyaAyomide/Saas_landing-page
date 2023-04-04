import React from 'react'
import Image from 'next/image'
import { svResource } from '@/public/svg/svexporter'

export default function Emoji() {
  return (
    <div className='flex justify-around px-6 py-4'>
      <div className='h-[36px] w-[36px]'>
        <Image src={svResource.SuprisedSvg} alt='' className='h-full w-full object-cover'/>
      </div>
      <div className='h-[36px] w-[36px]'>
        <Image src={svResource.AngrySvg} alt='' className='h-full w-full object-cover'/>
      </div>
      <div className='h-[36px] w-[36px]'>
        <Image src={svResource.LoveSvg} alt='' className='h-full w-full object-cover'/>
      </div>
    </div>
  )
}
