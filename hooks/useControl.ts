import React,{useEffect,useState} from "react"
import { AnimationControls } from "framer-motion"

interface contolInterface {
    control: AnimationControls
    isInView: boolean
    repeat?:boolean
}
export function useControls({control,isInView,repeat=false}:contolInterface){
    useEffect(()=>{
        if(isInView){
            control.start("animate")
        }
        else if(repeat){
            control.start("initial")
        }
        // console.log("Heree")
    },[control,isInView])
    return control
}

interface viewInterface{
    isInView:boolean
    setIsInView:React.Dispatch<React.SetStateAction<boolean>>
    setHeaderTriggered?:React.Dispatch<React.SetStateAction<boolean>>
    
}
export function useSetView({isInView,setIsInView,setHeaderTriggered}:viewInterface){
    useEffect(()=>{
        setIsInView(isInView)
        if(!!setHeaderTriggered){
            setTimeout(()=>{
                setHeaderTriggered(true)
            },300)
       
        }
    },[isInView,setIsInView])
   return isInView
}

export const useMounted = ()=>{
    const [mounted,setIsmountd] = useState(false)
    useEffect(()=>{
        setIsmountd(true)
    },[])
    return mounted
}

export function useCounter(isInview:boolean){
    const [count,setCount] = useState<number>(0)
    useEffect(()=>{
        if(!isInview){return}
        if (count < 25000){
            setTimeout(()=>{
                setCount((prev=>prev+1000))
            },70)
        }else if (count>=25000 && count < 25300 ){
            setTimeout(()=>{
                setCount((prev=>prev + 100))
            },100)
        }else if(count >= 25300 && count <25350){
            setTimeout(()=>{
                setCount((prev=>prev + 10))
            },100)
        }
        else if(count >= 25350 && count < 25356){
            setTimeout(()=>{
                setCount((prev=>prev + 1))
            },200)
        }
    },[isInview,count,setCount])
    return count
}