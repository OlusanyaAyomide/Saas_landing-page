import React from 'react'
import { Resources } from '@/public/images/exporter'
import Image from 'next/image'
import { BarChart } from '@/utils/constants'
import { motion,useAnimation } from 'framer-motion'
import { useControls } from '@/hooks/useControl'
import { useInView } from 'react-intersection-observer'
import { BarAnimation,moveAnimation } from '@/utils/xanimation'

export default function HeroChart() {
  const reading = ["8k","6k","4k","2k"]
  const [ref,isInView] = useInView({threshold:0.6})
  const [divref,divInView] = useInView()
  const control = useAnimation()
  const divControl = useAnimation()
  const animate = useControls({control,isInView,repeat:true})
  const animatediv = useControls({control:divControl,isInView:divInView,})
  return (
    <motion.div ref={divref}  variants={moveAnimation({y:50,opacity:0,duration:1})} initial="initial" animate={divControl} className='absolute bottom-4 sm:bottom-32 md:bottom-10 -left-[49px] z-20 md:-left-[15px] lg:-left-[112px] sm:-left-16'>
        <div className='h-[350px] w-[400px] relative '>
            <Image src={Resources.Graphrectangle} alt='' priority/>
        </div>
        <div className='-6 z-30 absolute top-2 left-[60px] h-[310px] w-[280px] pt-6 px-6'>
        <div className='flex justify-between items-center'>
            <span className='text-sm text-brand-blue font-roboto font-semibold'>Followers Growth</span>
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
          <h1 className='mt-2 text-xs font-[500] text-brand-blue'><span className='text-lg mr-2 font-semibold'>16.2K</span> New Followers</h1>
          <div className='relative h-full -mt-4'>
          <div className='absolute  inset-0'>
            {reading.map((item,key)=>{
              return(
                <div className='relative h-[52.5px] border-b border-[#E67EE]' key={key}>
                  <span className='text-[10px] -bottom-1 absolute -left-5 text-brand-blue'>{item}</span>
                </div>
              )
            })}
          </div>
          <div className='h-[210px] flex items-end justify-around relative z-20' ref={ref}>
            {BarChart.map((item,key)=>{
              return(
                <motion.div variants={BarAnimation(item.height)} key={key} initial="initial" animate={control} className='overflow-hidden' style={{height:item.height}}>
                  <Image src={item.bar} alt=''/>
                </motion.div>
              )
            })}
          </div>
        </div>
        </div>
   
    </motion.div>
  )
}
