import React,{useEffect,useState} from "react"
import { AnimationControls } from "framer-motion"
import { SetStateAction } from "react"
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