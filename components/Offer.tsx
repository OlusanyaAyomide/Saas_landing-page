import React from 'react'
import { Typography } from '@/utils/constants'
import { offerList } from '@/utils/constants'
import Image from 'next/image'
import { useAnimation,motion } from 'framer-motion'
import { useControls } from '@/hooks/useControl'
import { useInView } from 'react-intersection-observer'
import { moveAnimation } from '@/utils/xanimation'

export default function Offer() {
  const [ref,isInView] = useInView({threshold:0.1})
  const control = useAnimation()
  const animate = useControls({control,isInView})

  return (
    <section className='-mt-32 lg:-mt-44  relative lowpadding'>
      <h1 className='text-center'><span className="section-header">What we Offer?</span></h1>
      <p className=' hero-paragraph font-semibold mt-0 sm:px-2 md:w-10/12 sm:mx-auto lg:w-8/12 text-center'>{Typography.offerText}</p>
      <div className='mt-12 flex xl:px-12 justify-center flex-wrap' ref={ref}>
        {offerList.map((item,key)=>{
          return(
            <motion.div initial="initial" animate={control} variants={moveAnimation({y:50,opacity:0,delay:0,duration:1.5})} className='mx-2 w-[282px] py-8 px-6  bg-white   rounded-md mb-6' key={key} >
              <div className='w-[50px] h-[50px] shadow-2xl shadow-black/10 sm:w-[60px] sm:h-[60px] rounded-full bg-[#ECEEFF] p-3'>
                <Image src={item.image} alt="" className='h-full w-full object-contain'/>
              </div>
              <h1 className='mt-4 font-roboto font-[500] text-lg md:text-xl text-brand-blue'>{item.header}</h1>
              <p className='hero-paragraph mt-2 text-base text-left'>{item.text}</p>
            </motion.div>
          )
        })}
      </div>
    </section>
  )
}
