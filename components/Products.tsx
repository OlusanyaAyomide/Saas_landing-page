import React from 'react'
import { ProductArray } from '@/utils/constants'
import { svResource } from '@/public/svg/svexporter'
import Image from 'next/image'
import { moveAnimation } from '@/utils/xanimation'
import { useControls } from '@/hooks/useControl'
import { motion,useAnimation } from 'framer-motion'
import { useInView } from 'react-intersection-observer'


export default function Products() {
  const control = useAnimation()
  const [ref,isInView] = useInView({threshold:0.1})
  const animate = useControls({isInView,control,repeat:false})
  return (
    <section className='mt-16 md:mt-24 minpadding overflow-hidden'>
        <h1 className='text-center px-4 w-fit mx-auto md:px-0 section-header'><span>Our plans scale with your <span className='sm:block'>product</span></span></h1>
        <p className=' hero-paragraph font-semibold mt-1 sm:px-2 md:w-10/12 sm:mx-auto lg:w-8/12 text-center'> in virtual space through communication platforms. </p>
        <div className='mt-16 flex flex-wrap justify-center' ref={ref}>
            {ProductArray.map((item,key)=>{
                return(
                  <motion.div key={key}  initial="initial" animate={control} variants={moveAnimation({x:key===0?40:key===1?0:-40,opacity:key===1?1:0,duration:1})} className={`mb-6 rounded-lg flex flex-col justify-between px-6 py-8 w-[362px] h-[500px] mx-2 ${key===1?"bg-[#481177] z-20":"bg-white shadow-md z-10"}`}>
                    <div>
                      <h1 className={`font-roboto text-center  text-[28px] mb-6 ${key===1?"text-white":"text-brand-blue"}`}>{item.header}</h1>
                      <h1 className='text-center'><span className='section-header'>{item.price}</span></h1>
                      <div className='mt-12 px-4'>
                        {item.content.map((item,keys)=>{
                          return(
                            <div className='flex items-center my-2' key={keys}>
                              <div className='h-[12px] w-[12px] rounded-full mr-3'>
                                <Image src={key===1?svResource.whiteMark:svResource.blueMark} alt="" className='h-full w-full object-contain'/>
                              </div>
                              <h1 className={`font-roboto font-[400] text-base ${key===1?"text-white":"text-brand-blue"}`}>{item}</h1>
                            </div>
                          )
                        })}
                      </div>
                      </div>
                      <div className='mx-4 p-[1px] rounded-[10px] h-[60px] brandgradient mb-2'>
                          <div className={`${key===1?"":"bg-white rounded-lg"} h-full flex items-center justify-center`}>
                              <span className={`text-[15px] ${key===1?"text-white":"gradienttext font-normal"}`}>{item.button}</span>
                            </div>         
                      </div>
                  </motion.div>
                )
            })}
        </div>
     
    </section>
  )
}

