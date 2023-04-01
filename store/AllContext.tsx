import { useState,createContext,SetStateAction,Dispatch } from "react";

interface AppInterface{
    isnavActive:boolean
    setIsNavActive:Dispatch<SetStateAction<boolean>>
    headerInView:boolean
    setHeaderInView:Dispatch<SetStateAction<boolean>>
    headertriggered:boolean
    setHeaderTriggered:Dispatch<SetStateAction<boolean>>
}

const AllContext = createContext<AppInterface>({
    isnavActive:false,
    setIsNavActive:()=>{},
    headerInView:true,
    setHeaderInView:()=>{},
    headertriggered:false,
    setHeaderTriggered:()=>{}
})

export function AllContextProvider(props:any){
    const [isnavActive,setIsNavActive] = useState<boolean>(false)
    const [headerInView,setHeaderInView] = useState<boolean>(true)
    const [headertriggered,setHeaderTriggered] = useState(false)
    const context ={
        isnavActive,setIsNavActive,headerInView,setHeaderInView,headertriggered,setHeaderTriggered
    }
    return <AllContext.Provider value={context}>{props.children}</AllContext.Provider>

}
export default AllContext