import React from 'react'
import { Typography } from '@/utils/constants'
import DataComponent from './HeroComponent/DataComponent'
import MediaType from './HeroComponent/MediaType'
import { motion } from 'framer-motion'
import HeroChart from './HeroComponent/HeroChart'
import { moveAnimation } from '@/utils/xanimation'
import Image from 'next/image'
import { svResource } from '@/public/svg/svexporter'

export default function Hero() {
    
  return (
    <section className='mt-8 flex lg:items-center flex-wrap  relative'>
        <div className='absolute -top-8 left-0'>
            <Image src={svResource.ArrowTop} alt='' className='w-[4em] h-[4em] sm:w-[5em] sm:h-[5em] md:w-[7em] md:h-[7em] xl:w-[8em] xl:h-[8em]'/>
        </div>
        <div className='w-full relative lg:right-2 pt-8  lg:pt-0 lg:w-6/12 mb-20 lg:mb-20 widepadding lg:pr-2 lg:pl-40 z-20'>
            <motion.div variants={moveAnimation({y:40,opacity:0,duration:1.2})} initial="initial" animate="animate">
                <span className='block my-2 gradienttext herotext'>Tell a better</span>
                <span className='block my-2 gradienttext herotext'>brand Story</span>
                <span className='hero-paragraph font-semibold lg:pr-6'>{Typography.herotext}</span>
                <motion.div className='mt-8 lg:mt-12 flex justify-center lg:justify-start'>
                    <button className='brand-button mr-3 text-[15px]'>Get Started</button>
                    <div className='brandgradient p-[1px] block h-[42px] sm:h-[48px] rounded-md'>
                        <button className='h-full px-6 rounded-md bg-white '><span className='gradienttext text-[15px] font-semibold'>Contact Us</span></button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
        <div className='w-full lg:w-6/12 h-[1100px] sm:h-[930px] md:h-[614px] relative z-20 mt-12 lg:mt-0 left-4'>
            <DataComponent/>
            <MediaType/>
            <HeroChart/>
        </div>
   </section>
  )
}
