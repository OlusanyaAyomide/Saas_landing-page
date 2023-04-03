import React from 'react'
import { Resources } from '@/public/images/exporter'
import { svResource } from '@/public/svg/svexporter'
import Image from 'next/image'
import {BsFillPlayFill} from "react-icons/bs"
import { NavLinks } from '@/utils/constants'
import {FaFacebookF,FaInstagram,FaYoutube} from "react-icons/fa" 


export default function Footer() {
  const Navlink =({style}:{style?:string})=>{
    return <div className={`flex ${style}`}>
        {NavLinks.map((item,key)=>{
          return(
            <span className={`text-sm text-brand-blue font-[500]`} key={key}>{item}</span>
          )
        })}
    </div>
  }
  return (
   <section className='mt-24 widepadding relative'>
      <h1 className='text-center px-4 w-fit mx-auto md:px-0 section-header'><span>Social Media Its Ways
      <span className='sm:block'> Of Our Excellence.</span></span></h1>
      <div className='mt-16 w-full sm:w-[445px] mx-auto bg-[#1C1E32] p-1 h-[60px] xl:h-[73px] pl-3 flex items-center rounded-[10px]'>
        <input type="text" placeholder='Email' className='w-full ml-2 pr-2 py-2 outline-none bg-transparent text-white'/>
        <div className='h-full relative'>
          <div className='absolute h-[96%] top-[1px] rounded-lg w-[40px] bg-white/60 right-[1px] z-20 flex justify-center items-center'>
            <Image src={svResource.ArrorR} alt='' className='w-fit h-fit'/>
          </div>
        <button className='w-[140px] sm:w-[197px] brandgradient text-white h-full rounded-[10px]'>Get Started
        </button>
        </div>
      </div>
      <div className='flex w-fit mt-6 mx-auto items-center'>
          <div className='h-[53px] w-[53px] rounded-full relative'>
            <Image src={Resources.Person8} alt='' className='h-full w-full object-contain'/>
            <div className='absolute top-[15px] z-20 h-[22px] w-[22px] brandgradient rounded-full -right-[7px] flex items-center justify-center text-brand-blue text-xs'><BsFillPlayFill/></div>
          </div>
          <span className='ml-5 decoration-[2px] underline-offset-2 text-base font-[500] underline text-brand-blue'>Watch our video</span>
        </div>  
        <div className='mt-16 border-b-2 relative pb-12 flex flex-wrap justify-between md:justify-around items-center'>
        <div className='absolute -bottom-4 md:bottom-12 xl:-right-28 -right-4 md:-right-28 sm:-right-12'>
          <Image src={svResource.ArrowBottom} alt='' className='w-[5em] h-[5em] sm:w-[6em] sm:h-[6em] md:w-[7em] md:h-[7em] xl:w-[8em] z-20 xl:h-[8em]'/>
        </div>  
            <Navlink style='mb-5 md:mb-0 md:hidden w-full justify-between'/>
            <div className='flex items-center'>
            <div className='hexagon flex justify-center items-center brandgradient'>
                <div className='bg-white minhexagon rotate-90'></div>
            </div>
            <span className='brand-blue-text ml-4'>Brands.io</span>
            </div>
            <Navlink style='hidden md:flex w-5/12 justify-around relative z-20'/>
            <div className='flex'>
              <span className='text-sm mx-2 text-brand-blue'><FaFacebookF/></span>
              <span className='text-sm mx-2 text-brand-blue'><FaInstagram/></span>
              <span className='text-sm mx-2 text-brand-blue'><FaYoutube/></span>
            </div>
        </div> 
        <p className='my-6 light-text text-center'>Copyright © Brands.io creative</p>
    
   </section>
  )
}
