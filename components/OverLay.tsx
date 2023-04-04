import React from 'react'
import { Resources } from '@/public/images/exporter'
import { svResource } from '@/public/svg/svexporter'
import Image,{StaticImageData} from 'next/image'


interface ImageInterface{
  src:StaticImageData,style?:string
}
export default function OverLay() {
  const Img = ({src,style}:ImageInterface)=>{
    return <Image src={src} alt="" className={`h-fit w-fit ${style}`}/>
  }
  return (
    <div className='relative overflow-x-hidden -mt-[470.5px] pt-[460px] sm:pt-[400px] bg-[#F8F8FF] h-[850px] -skew-y-[17deg]'>
        <div className='skew-y-[17deg] flex flex-wrap widepadding'>
            <div className='w-6/12 sm:w-4/12 lg:w-[20%] items-center h-[60px] py-2 relative  flex'>
              <Img src={svResource.RoundLogSvg}/>
              <Img src={svResource.PlanText}/>
              <Img src={svResource.DayText} style='mt-1'/>
            </div>
            <div className='w-6/12 sm:w-4/12 lg:w-[20%] items-center justify-end sm:justify-start h-[60px] py-2 relative  flex'>
              <Img src={svResource.Umbraco}/>
            </div>
            <div className='w-6/12 sm:w-4/12 lg:w-[20%] items-center h-[60px] py-2 relative flex'>
              <Img src={svResource.PB}/>
              <Img src={svResource.EB}/>
              <Img src={svResource.AB}/>
              <Img src={svResource.Rb}/>
              <Img src={svResource.LB} style='relative bottom-[2px]'/>
              <Img src={svResource.FB} style='relative bottom-[2px]'/>
              <Img src={svResource.IB} style='relative bottom-[2px]'/>
              <Img src={svResource.SB}/>
              <Img src={svResource.HB} style='relative bottom-[2px]'/>
            </div>
            <div className='w-6/12 sm:w-4/12  pl-8 sm:pl-0 lg:mt-0 lg:w-[20%] items-center h-[60px] py-2 relative flex'>
              <Img src={svResource.BL}/>
              <Img src={svResource.RS} style='mt-1'/>
              <Img src={svResource.IL} style='mt-1'/>
              <Img src={svResource.Gl} style='mt-[9px]'/>
              <Img src={svResource.HL}/>
              <Img src={svResource.TL} />
              <Img src={svResource.PL} style='mt-[9px]'/>
              <Img src={svResource.El} style='mt-[3px]'/>
              <Img src={svResource.Al} style='mt-[3px]'/>
              <Img src={svResource.RS} style='mt-[3px]'/>
              <Img src={svResource.LL}/>
            </div>
            <div className='w-6/12 sm:w-4/12 lg:w-[20%] items-center h-[60px] py-2 relative  flex'>
              <Img src={svResource.PlanText}/>
              <Img src={svResource.DayText} style='mt-1'/>
              <Img src={svResource.RoundLogSvg}/>
            </div>
        </div>

    </div>
  )
}
