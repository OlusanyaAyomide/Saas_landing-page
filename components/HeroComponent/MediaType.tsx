import React from 'react'
import { Resources } from '@/public/images/exporter'
import Image from 'next/image'
import { Typography } from '@/utils/constants'
import Emoji from './Emoji'
import { motion,useAnimation } from 'framer-motion'
import { useControls } from '@/hooks/useControl'
import { useInView } from 'react-intersection-observer'
import { moveAnimation } from '@/utils/xanimation'

export default function MediaType() {
  const control = useAnimation()
  // const control2 = useAnimation()
  const [ref,isInView] =  useInView({threshold:0.3})
  const animate = useControls({control,isInView})
  return (
    <div className='absolute z-10 top-60 sm:top-16  md:left-[320px] sm:left-[224px] lg:left-[200px] xl:left-64 -right-32 md:-right-32 lg:-right-44 xl:-right-20 '>
        <motion.div className='h-[500px] w-[500px]' ref={ref} variants={moveAnimation({x:50,opacity:0,duration:2})} initial="initial" animate={control}>
            <div className='absolute top-0'>
            <Image src={Resources.MediaRectangle} alt="" width={400.89} height={500} priority/>
            <div className='absolute -bottom-[6px]  h-[96px] rounded-md left-9 w-[320px] lg:w-[315px] xl:w-[320px] z-40 flex items-center p-2 py-3'>
              <div className='h-full px-2 flex rounded-md font-semibold items-center bg-[#EADFFB]'><span className='md:text-[40px] text-[38px] text-brand-blue'>14K</span></div>
              <div className='w-full px-4'>
                <h1 className='text-sm text-brand-blue font-roboto'>Followers Growth</h1> 
                 <div className='my-2'>
                    <Image src={Resources.Bar11} alt="" className='w-fit h-fit'/>
                 </div>
                 <div className='mb-2'>
                    <Image src={Resources.Bar10} alt="" className='w-fit h-fit'/>
                 </div>
              </div>   
            </div>
            </div>
            <div className='absolute top-72 z-30 -left-4 lg:-left-5 xl:-left-4 '>
              <Image src={Resources.Growth2Rectangle} alt="" width={400.89} height={500} priority/>
            </div>
            <div className='absolute top-[400px] left-12 z-10 w-[400px]'>
              <Image src={Resources.EmojiRectangle} alt="" width={320.89} height={500} priority/>
              <div className='absolute bottom-[118px]  h-[72px] rounded-md left-16 w-[192px] z-40'>
                <Emoji/>
              </div>
            </div>
            <div className='left-[59px] rounded-md relative z-20 h-[276px] w-[283px] px-6 py-8 font-semibold' >
                <div className='flex justify-between items-center' >
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
        </motion.div>
        
    </div>
  )
}
