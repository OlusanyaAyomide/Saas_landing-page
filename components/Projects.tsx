import React from 'react'
import { Typography } from '@/utils/constants'
import { useInView } from 'react-intersection-observer'
import { useCounter } from '@/hooks/useControl'

export default function Projects() {
  const [ref,isInview] = useInView({threshold:0.1})
  const count = useCounter(isInview)
  return (
    <div   className='mt-24 widepadding bg-[#F8F3FF] py-32'>
        <div className='flex'ref={ref}>
            <div className='w-4/12'>
              <span className='gradienttext block w-fit mx-auto project-text'>{count.toLocaleString()}</span>
              <p className='text-center text-xs xl:text-xl lg:text-base text-brand-blue'>Projects Done</p>
            </div>
            <div className='w-4/12'>
              <span className='gradienttext block w-fit mx-auto project-text'>1M+</span>
              <p className='text-center text-xs xl:text-xl lg:text-base text-brand-blue'>Projects Done</p>
            </div>
            <div className='w-4/12'>
              <span className='gradienttext block w-fit mx-auto project-text'>95%</span>
              <p className='text-center text-xs xl:text-xl sm:text-base text-brand-blue'>Happy Customers</p>
            </div>
        </div>
        <h1 className='w-fit mx-auto mt-16 section-header text-center'>Want to start a Project With us?</h1>
        <p className='text-center  hero-paragraph font-semibold mt-1 sm:px-2 md:w-10/12 sm:mx-auto lg:w-8/12'>{Typography.project}</p>
        <button className='w-[198px] h-[58px] rounded-[10px] flex items-center justify-center mx-auto brandgradient mt-16 text-white'>Get Started</button>
    </div>
  )
}
