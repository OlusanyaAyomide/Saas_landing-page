import React,{Fragment, useContext} from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import AllContext from '@/store/AllContext'
import TopHeader from '@/components/TopHeader'
import FixedHeader from '@/components/FixedHeader'

export default function Home() {
  const {headerInView,headertriggered} = useContext(AllContext)
  return (
   <Fragment>
    <div className='min-h-[300vh] '>
      <div className=' hero-bg pb-20'>
        { <TopHeader/>}
        {!headerInView && headertriggered &&  <FixedHeader/>}
        <Hero/>
      </div>
    </div>
   </Fragment>
  )
}
