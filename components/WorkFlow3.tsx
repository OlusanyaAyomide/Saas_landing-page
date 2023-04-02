import React from 'react'
import Image from 'next/image'
import { svResource } from '@/public/svg/svexporter'
import { Resources } from '@/public/images/exporter'
import { smallBars } from '@/utils/constants'
import { Typography } from '@/utils/constants'
import { BarAnimation } from '@/utils/xanimation'
import { useControls } from '@/hooks/useControl'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'

export default function WorkFlow3() {
  const control = useAnimation()
  const [ref,isInView] = useInView({threshold:0.4})
  const animate = useControls({isInView,control,repeat:true})
  return (
    <div className='w-full mt-6 rounded-md sm:w-[475px] h-[460px] mx-auto lg:mx-0 relative lg:right-8'>
    <Image src={svResource.flow1} alt="" className='w-full h-[460px] object-cover relative lg:right-4 xl:right-8 '/>
    <div className='absolute inset-0'>
      <div className='w-[260px] -mt-5 mx-auto relative lg:right-4 bg-white rounded-[10px] px-6 py-8 '>
        <div className='flex justify-between'>
            <div>
            <div className='flex items-center'><span className='mr-3 h-[5px] w-[5px] rounded-full bg-[#FF7138] block'></span><span className='xl:text-xl -ml-1 text-lg font-[500] text-brand-blue'>$500+</span></div>
            <span className='block light-text ml-4'>Earn per day</span>
            </div>
            <div>
            <div className='flex items-center'><span className='mr-3 h-[5px] w-[5px] rounded-full bg-[#FF7138] block'></span><span className='xl:text-xl -ml-1 text-lg font-[500] text-brand-blue'>$50</span></div>
            <span className='block text-xs text-[#A6A6A6] text-[500] ml-4'>Pay us</span>
            </div>
        </div>
        <div className='mt-8 relative h-[120px] mx-auto'>
            <Image src={Resources.leftArc} alt="" className='absolute top-0 left-0'/>
            <Image src={Resources.RightArc} alt="" className='absolute top-3 right-0'/>
        </div>
        <div>
          <h1 className='font-[500] text-brand-blue text-center text-[26px] md:text-[30px] mb-1'>$15,000+</h1> 
          <p className='text-center light-text'>Earning</p>
        </div>
        <div className='absolute -bottom-10 z-10 rounded-[10px] bg-white h-[150px] w-[145px] -right-16 px-6 py-6'>
            <h1 className='text-center font-[500] text-sm text-brand-blue'>DashBoard</h1>
            <div className='h-full flex items-end justify-around' ref={ref}>
                {smallBars.map((item,key)=>{
                    return(
                        <motion.div className='overflow-hidden' style={{height:item.height}} key={key} variants={BarAnimation(item.height)} initial="initial" animate={control} >
                            <Image src={item.image} alt='' className='h-fit w-fit'/>
                        </motion.div>
                    )
                })}
            </div>
        </div>
      </div>
   
    </div>
    <div className='absolute shadow-md  bg-white rounded-xl w-[325px] -bottom-4 --left-8 sm:-left-16 md:-left-36 px-4 py-2'>
        <h1 className='text-[24px] text-brand-blue text-center md:text-[26px] font-roboto font-[500] mb-1'>External Data</h1>
        <p className='hero-paragraph text-base text-center mt-0 mb-2'>{Typography.external}</p>
    </div>
  </div>
  )
}
