import React from 'react'
import { Typography } from '@/utils/constants'
import { svResource } from '@/public/svg/svexporter'
import Image from 'next/image'
import { Resources } from '@/public/images/exporter'
import WorkFlow2 from './WorkFlow2'
import WorkFlow3 from './WorkFlow3'
import { useControls } from '@/hooks/useControl'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { moveAnimation } from '@/utils/xanimation'

export default function WorkFlow() {
  const control = useAnimation()
  const [ref,isInView] = useInView({threshold:0.2})
  const animate = useControls({isInView,control,repeat:true})
  return (
    <section className="lowpadding xl:px-20 flex flex-wrap mt-12 justify-between relative overflow-hidden">
        <motion.div initial="initial" animate={control} variants={moveAnimation({x:-30,opacity:0,duration:1})} className='w-full sm:w-[475px] sm:mx-auto lg:mx-0 relative lg:left-12 xl:left-20 z-20' ref={ref}>
            <h1 className='text-center lg:text-left'><span className='section-header lg:pl-6'>How It Works?</span></h1>
            <p className='hero-paragraph mt-2 md:w-10/12 mx-auto text-base text-center lg:text-left lg:mx-0 lg:pl-6'>{Typography.worktext}</p>
            <div className='w-full rounded-md overflow-hidden sm:w-[475px] h-[580px] mt-8 mx-auto lg:mx-0 relative'>
              <Image src={svResource.flow1} alt="" className='w-full h-full object-cover relative lg:right-4 '/>
              <div className='absolute inset-0'>
                <div className='w-[250px] mx-auto mt-20 bg-white rounded-md relative lg:right-4  py-8 px-4'>
                  <Image src={Resources.Bar12} alt='' className='h-fit w-fit mb-2 block'/>
                  <Image src={Resources.Bar13} alt='' className='h-fit w-fit mb-2 block'/>
                  <div className='flex mt-2 items-center'>
                    <div className='h-[44px] w-[44px] overflow-hidden mr-4 relative rounded-full bg-[#515b63] shadow-2xl shadow-black/10'>
                      <Image src={Resources.Person6} alt='' className='h-fit w-fit object-contain absolute -bottom-[4px]'/>
                    </div>
                    <Image src={Resources.Bar14} alt='' className='h-fit w-fit'/>
                  </div>
                </div>
                <div className='mt-4 mx-auto w-[250px] relative lg:right-4 py-4 px-4 rounded-md bg-white flex items-center'>
                    <div className='h-[47px] w-[47px] rounded-md flex items-center justify-center bg-[#26262E] mr-4'>
                      <div className='bg-[#14141C] w-[19px] h-[14px] rounded-[5px] flex items-center justify-center'>
                        <Image src={Resources.ArowDown} alt='' className='h-fit w-fit object-contain'/>
                      </div>
                    </div>
                    <Image src={Resources.Bar14} alt='' className='h-fit w-fit'/>
                </div>
                <div className='w-[350px] mx-auto relative lg:right-4'>
                <h1 className='text-center my-3'><span className='relative font-roboto text-[34px] text-brand-blue font-[500]'>Intelligence</span></h1>
                <p className='relative w-full sm:w-8/12 mx-auto hero-paragraph text-base text-center'>{Typography.intelligent}</p>
                </div>
          
              </div>
            </div>
        </motion.div>
        <div className='w-full sm:w-[475px] sm:mx-auto lg:mx-0 relative z-20'>
          <WorkFlow2/>
          <WorkFlow3/>
        </div>
    </section>
  )
}
