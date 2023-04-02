import React,{Fragment, useContext} from 'react'
import Header from '@/components/Header/Header'
import Hero from '@/components/Hero'
import AllContext from '@/store/AllContext'
import TopHeader from '@/components/TopHeader'
import FixedHeader from '@/components/Header/FixedHeader'
import OverLay from '@/components/OverLay'
import Offer from '@/components/Offer'
import WorkFlow from '@/components/WorkFlow'
import Products from '@/components/Products'
import Testimony from '@/components/Testimony'
import Projects from '@/components/Projects'
import Media from '@/components/Media'


export default function Home() {
  const {headerInView,headertriggered} = useContext(AllContext)
  return (
   <Fragment>
    <div className='min-h-[300vh] pb-28 overflow-hidden'>
      <div className=' hero-bg pb-20'>
        { <TopHeader/>}
        {!headerInView && headertriggered &&  <FixedHeader/>}
        <Hero/>
      </div>
      <OverLay/>
      <Offer/>
      <WorkFlow/>
      <Products/>
      <Testimony/>
      <Projects/>
      <Media/>
      </div>
   </Fragment>
  )
}
