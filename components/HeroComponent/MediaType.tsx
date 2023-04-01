import React from 'react'
import { Resources } from '@/public/images/exporter'
import Image from 'next/image'
import { motion,useAnimation } from 'framer-motion'
import { Typography } from '@/utils/constants'
export default function MediaType() {

  return (
    <div className='absolute z-10 top-60 sm:top-16  md:left-[320px] sm:left-[224px] lg:left-[200px] xl:left-64 -right-32 md:-right-32 lg:-right-44 xl:-right-20 '>
        <div className='h-[500px] w-[500px]'>
            <div className='absolute top-0'>
            <Image src={Resources.MediaRectangle} alt="" width={400.89} height={500} priority/>
            </div>
            <div className='left-[59px] rounded-md relative z-20 h-[276px] w-[283px] px-6 py-8 font-semibold'>
                <div className='flex justify-between items-center'>
                    <span className='text-sm text-brand-blue font-roboto'>Media Type</span>
                    <div className='flex'>
                      <div className='gradient-circle mr-1'>
                        <div className='h-full w-full bg-white rounded-full flex items-center justify-center'>
                          <Image src={Resources.Vector} alt="" className="object-contain"/>
                        </div>
                      </div>
                      <div className='gradient-circle'>
                        <div className='h-full w-full bg-white rounded-full flex items-center justify-center'>
                        <Image src={Resources.Union} alt="" className="object-contain"/>
                        </div>
                      </div>
                    </div>
                </div>
                <div className='relative h-full overflow-hidden rounded-lg'>
                    <div className='absolute top-4 left-8 z-10'>
                      <Image src={Resources.fullCicle} alt=""/>
                    </div>
                    <div className='absolute -top-2 -left-3 z-10'>
                      <Image src={Resources.halfCircle} alt=""/>
                    </div>
                    <div className='absolute z-30 top-16 left-2'>
                      <Image src={Resources.chatBox} alt=""/>
                      <div className='inset-0 bottom-2 px-2 absolute py-3 text-xs text-brand-blue'>{Typography.MediaText}</div>
                    </div>
                </div>
            </div>
        </div>
        
    </div>
  )
}
