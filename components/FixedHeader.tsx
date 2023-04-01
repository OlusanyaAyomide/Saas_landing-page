import React ,{useContext}from 'react'
import { useInView } from 'react-intersection-observer'
import AllContext from '@/store/AllContext'
import { useSetView } from '@/hooks/useControl'
import Header from './Header'
import { motion } from 'framer-motion'
import { moveAnimation } from '@/utils/xanimation'
export default function FixedHeader() {
    const [ref,isInView] = useInView({threshold:0.2})
    const {setHeaderInView} = useContext(AllContext)
    const setview = useSetView({isInView,setIsInView:setHeaderInView})
  return (
    <motion.div variants={moveAnimation({y:-50})} initial="initial" animate="animate" className='bg-white  w-full fixed -top-2 pt-2 z-50'><Header/></motion.div>
  )
}
