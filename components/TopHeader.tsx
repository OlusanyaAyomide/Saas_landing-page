import React, { useContext } from 'react'
import Header from './Header/Header'
import { useInView } from 'react-intersection-observer'
import AllContext from '@/store/AllContext'
import { useSetView } from '@/hooks/useControl'
export default function TopHeader() {
  const [ref,isInView] = useInView({threshold:0.2})
  const {setHeaderInView,setHeaderTriggered} = useContext(AllContext)
  const setview = useSetView({isInView,setIsInView:setHeaderInView,setHeaderTriggered})
    return(
    <div ref={ref}>
      <Header/>
    </div>
    )
  
}
