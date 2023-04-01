import React, { useContext } from 'react'
import { NavLinks } from '@/utils/constants'
import { toggleAnimation,toggleCenter } from '@/utils/xanimation'
import { motion,useAnimation,AnimatePresence  } from 'framer-motion'
import AllContext from '@/store/AllContext'
import Menu from './Menu'

export default function Header() {
  const control =  useAnimation()
  const {isnavActive,setIsNavActive,headerInView,headertriggered} = useContext(AllContext)
  const handleToggle =()=>{
    setIsNavActive((prev=>!prev))
    if(!isnavActive){control.start("animate")}
    else{
      control.start("animateback")}
  }
  return (
    <div className={`flex widepadding ${headerInView?"py-6":!headertriggered?"py-6":"py-3"} items-center relative`} >
        <div className='w-full lg:w-4/12  flex items-center'>
            <div className='hexagon flex justify-center items-center brandgradient'>
                <div className='bg-white minhexagon rotate-90'></div>
            </div>
            <span className='brand-blue-text ml-4'>Brands.io</span>
        </div>
        <div className='hidden lg:flex w-full'>
            {NavLinks.map((item,key)=>{
              const isfirst = key===0
                return(
                    <span className={`text-sm font-[500] mx-6 ${isfirst?"gradienttext":"text-brand-blue"}`} key={key}>{item}</span>
                )
            })}
        </div>
        <div className='flex items-center relative z-40'>
          <button className='mr-4 brand-button'>Log In</button>
          <button className='flex flex-col justify-between h-[24px]  w-[30px] cursor-pointer lg:hidden' onClick={handleToggle}>
          <motion.span className='toggler' variants={toggleAnimation(1)} initial="initial" animate={control}></motion.span>
            <motion.span className='toggler' variants={toggleCenter()} initial="initial" animate={control}></motion.span>
            <motion.span className='toggler' variants={toggleAnimation(3)} initial="initial" animate={control}></motion.span>
          </button>
        </div>
        <AnimatePresence>
           {isnavActive && <Menu/>}
        </AnimatePresence>

    </div>
  )
}
