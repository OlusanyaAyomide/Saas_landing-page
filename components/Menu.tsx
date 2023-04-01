import React, { useContext } from 'react'
import { NavLinks } from '@/utils/constants'
import {motion} from "framer-motion"
import { MenuBarAnimation,MenuItemsAnimation } from '@/utils/xanimation'
import AllContext from '@/store/AllContext'

export default function Menu() {
  const {headerInView} = useContext(AllContext)
  return (
    <motion.div className={`bg-white ${headerInView?"top-20":"top-16"} z-30 flex flex-col space-height items-center lg:hidden py-24 fixed left-0 w-full`} style={{height:"90vh"}} variants={MenuBarAnimation} initial="initial" animate="animate" exit="exit">
        {NavLinks.map((item,key)=>{
            const isfirst = key===0
            return(
                <motion.span className={`text-[30px] py-4 font-[600] gradient-text leading-[36px] ${isfirst?"gradienttext":"text-brand-blue"}`} variants={MenuItemsAnimation} key={key}>{item}</motion.span>
            )
        })}
    </motion.div>
  )
}
