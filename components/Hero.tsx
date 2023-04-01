import React from 'react'
import { Typography } from '@/utils/constants'
import DataComponent from './HeroComponent/DataComponent'
import MediaType from './HeroComponent/MediaType'
import { motion } from 'framer-motion'
import { heroContainer,heroChildren } from '@/utils/xanimation'
import HeroChart from './HeroComponent/HeroChart'
import { Resources } from '@/public/images/exporter'
import Image from 'next/image'

export default function Hero() {
    
  return (
    <div className='mt-8 flex lg:items-center flex-wrap overflow-hidden relative'>
        <div className='w-full relative lg:right-2 pt-8  lg:pt-0 lg:w-6/12 mb-20 lg:mb-20 widepadding lg:pr-2 lg:pl-40'>
            <motion.div variants={heroContainer} initial="initial" animate="animate">
                <motion.span variants={heroChildren} className='block my-2 gradienttext herotext'>Tell a better</motion.span>
                <motion.span variants={heroChildren} className='block my-2 gradienttext herotext'>brand Story</motion.span>
                <motion.span variants={heroChildren} className='hero-paragraph lg:pr-6'>{Typography.herotext}</motion.span>
                <motion.div  variants={heroChildren} className='mt-8 lg:mt-12 flex justify-center lg:justify-start'>
                    <button className='brand-button mr-3 text-[15px]'>Get Started</button>
                    <div className='brandgradient p-[1px] block h-[42px] sm:h-[48px] rounded-md'>
                        <button className='h-full px-6 rounded-md bg-white '><span className='gradienttext text-[15px] font-semibold'>Contact Us</span></button>
                    </div>
                </motion.div>
            </motion.div>
        </div>
        <div className='w-full lg:w-6/12 h-[1100px] sm:h-[950px] md:h-[614px] relative z-20 mt-12 lg:mt-0 left-4'>
            <DataComponent/>
            <MediaType/>
            <HeroChart/>
        </div>
   </div>
  )
}
