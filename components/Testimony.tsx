import React,{useEffect,useRef} from 'react'
import { Typography } from '@/utils/constants'
import { TestimonyText } from '@/utils/constants'
import {AiFillStar} from "react-icons/ai"
import {BsArrowLeft,BsArrowRight} from "react-icons/bs"
import Image from 'next/image'
import { svResource } from '@/public/svg/svexporter'

export default function Testimony() {
  const Star=()=>{
    return <span className='text-yellow-500 text-lg mx-[2px]'><AiFillStar/></span>
  }
  const ref = useRef<HTMLDivElement>(null)

  useEffect(()=>{
    const width = window?.innerWidth
    ref.current?.scrollTo({left:width<500?360:width<800?200:150})
  },[])
  return (
    <div className='mt-16 md:mt-24 minpadding  relative'>
        <div className='absolute blur-[120px] top-24 -left-[210px] rounded-full h-[400px] hidden md:block w-[400px] z-30 bg-black/30'></div>
        <div className='absolute blur-[120px] top-24 -right-[180px] rounded-full h-[400px] hidden md:block w-[400px] z-30 bg-white'></div>
         <h1 className='text-center px-4 w-fit mx-auto md:px-0 section-header'><span>What Our Clients Say <span className='sm:block'>About Us</span></span></h1>
         <p className=' hero-paragraph font-semibold mt-1 sm:px-2 md:w-10/12 sm:mx-auto lg:w-8/12 text-center'>{Typography.testimony} </p>
         <div className='mt-16 flex  overflow-auto pb-4 lg:justify-center' ref={ref}>
            {TestimonyText.map((item,key)=>{
                return(
                  <div key={key}>
                    <div className={`w-[350px] bg-white mb-6 ${key===1?"":"opacity-[80%] scale-75"} mx-2 shadow-lg p-6 px-4 rounded-[10px]`} key={key}>
                      <h1 className='w-fit mx-auto mb-6 flex'>
                        <Star/><Star/><Star/><Star/><Star/>
                      </h1>
                      <p className='text-brand-blue text-base text-center'>{item.content}</p>
                      <p className='mt-4 text-center text-sm font-[600] text-brand-blue'>{item.name}</p>
                      <p className='text-brand-blue text-base text-center mt-'>Client from {item.location}</p>
                    </div>
                  </div>
         
                )
            })}
         </div>
         <div className='mt-12 bg-white w-[120px] items-center justify-between rounded-[50px] shadow-inner shadow-black/40 flex p-1 mx-auto'>
          <span className='ml-4'>
            <Image src={svResource.Arrow} alt='' className='h-fit w-fit'/>
          </span>
          <div className='brandgradient flex items-center justify-center h-[50px] w-[50px] rounded-full text-2xl font-bold text-white'><Image src={svResource.ArrorR} alt='' className='h-fit w-fit'/></div>
          </div>
    </div>
  )
}
