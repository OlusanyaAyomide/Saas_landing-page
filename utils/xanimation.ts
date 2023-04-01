import { delay } from "framer-motion";

export const toggleAnimation = (number:number) => {
    return {
      initial: {
        rotate: 0,
        height: "4px",
        y: 0,
      },
      animate: {
        rotate: number === 1 ? "45deg" : "-45deg",
        y: number === 1 ? 10 : -10,
        height: "3px",
        transition: {
          duration: 0.5,
          stiffness: 1,
        },
      },
      animateback: {
        rotate: 0,
        height: "4px",
        y: 0,
        transition: {
          duration: 0.5,
          stiffness: 1,
        },
      },
    };
  };
  
  export const toggleCenter = () => {
    return {
      initial: {
        height: "4px",
        x: 0,
        opacity: 1,
      },
      animate: {
        x: -50,
        opacity: 0,
        height: "0px",
        transition: {
          duration: 0.5,
          stiffness: 1,
        },
      },
      animateback: {
        x: 0,
        opacity: 1,
        height: "4px",
        transition: {
          duration: 0.5,
          stiffness: 1,
        },
      },
    };
  };
  
export const MenuBarAnimation = {
  initial:{
    y:-400
  },
  animate:{
    y:0,
    transition:{
      duration:0.3,
      when: "beforeChildren",
      staggerChildren: 0.3,
    }
  },
  exit:{
    y:-400,
    transition:{
      duration:0.1,
    }
  }
}
export const MenuItemsAnimation={
  initial: {
    opacity: 0,
    y:20
  },
  animate: {
    opacity: 1,
    y:0,
    transition: {
      duration: 0.2,
    },
  }
}

export const roundedAnimation ={
  initial:{
    height:200,
  },
  animate:{
    height:0,
    transition:{
      duration:0.5,
      delay:0.1
  }
 }
}
export const heroContainer={
  animate:{
    transition:{
      staggerChildren:0.5
  }
 }
}
export const heroChildren={
  initial:{
    y:20,
    opacity:0
  },
  animate:{
    y:0,
    opacity:1,
    transition:{
      duration:0.8,
    }
  }
}

export const BarAnimation=(height:number)=>{
  return{
    initial:{
      height:0,
    },
    animate:{
      height,
      transition:{
        duration:1,
        delay:1,
      }
    }
  }  
}
interface animationInterface{
  x?:number,
  y?:number,
  duration?:number
  opacity?:number
  delay?:number
}

export const moveAnimation = ({x=0,y=0,duration=0.5,opacity=1,delay=0}:animationInterface)=>{
  return{
    initial:{
      x,y,opacity
    },
    animate:{
      x:0,
      y:0,
      opacity:1,
      transition:{
        duration,delay
      }
    }
  }
}