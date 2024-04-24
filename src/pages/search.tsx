import { useState, useEffect } from "react";
import {motion, useAnimate , useAnimation, useAnimationControls} from "framer-motion"

 
type AnimatedTextProps = {
  text : string | string[]
  el ? : keyof JSX.IntrinsicElements                      //specify the HTML element type (e.g., "div", "span", "h1") in which the text will be wrapped  If not provided, it defaults to a paragraph element ("p").
  className?: string 
  repeatDelay ? : number                                    
}

export const AnimateUp = ({
  text,
  el: Wrapper = "p",
  className,
  repeatDelay    

} : AnimatedTextProps) => {
    

    return (
        <Wrapper className = {className}>
            <motion.span className="inline-block"  
            initial = {{y : 20}}
            animate = {{y : 0}}
            transition={{ duration: 1}}
            >
                {text}
            </motion.span>

        </Wrapper>

    )

}


export const AnimateOne = ({
  text,  
  el: Wrapper = "p",
  className,
//   delay = 2
    

} : AnimatedTextProps) => {
    const [isVisible, setIsVisible] = useState(true)

  //    useEffect(() => {
  //       setIsVisible(true)
  //       //const timeoutId = setTimeout(() => setIsVisible(true), delay * 1000); // Convert delay to milliseconds

  //   //return () => clearTimeout(timeoutId); // Cleanup on unmount
  // }, []);

    const variants = {
    hidden: { x : 0 , y : 0},
    visible: { x: -50 , y: -300 },
  };



     return (
        <Wrapper className = {className}>
            <motion.span className="inline-block" 
            animate = {isVisible ? "visible" : "hidden"}
            variants = {variants}
            transition={{ duration: 1 , delay: 1}}>
                {text}
            </motion.span>

        </Wrapper>

    )

 
}



export const AnimateTwo = ({
  text,
  el: Wrapper = "p",
  className,
//   delay = 2
    

} : AnimatedTextProps) => {
    const [isVisible, setIsVisible] = useState(true)

  //    useEffect(() => {
  //       setIsVisible(true)
  //       //const timeoutId = setTimeout(() => setIsVisible(true), delay * 1000); // Convert delay to milliseconds

  //   //return () => clearTimeout(timeoutId); // Cleanup on unmount
  // }, []);

    const variants = {
    hidden: { x : 0 , y : 0},
    visible: { x: 0 , y: 100 },
  };



     return (
        <Wrapper className = {className}>
            <motion.span className="inline-block" 
            animate = {isVisible ? "visible" : "hidden"}
            variants = {variants}
            transition={{ duration: 1 , delay: 1}}>
                {text}
            </motion.span>

        </Wrapper>

    )

 
}



export default function Search(){

  const [isReduced, setIsReduced] = useState(false);
  const controlOne = useAnimation()
  const controlTwo = useAnimation()
  const controlThree = useAnimation()
  const controlFour = useAnimation()
  const controlFive = useAnimation()
  const controlSix = useAnimation() 
  const controlSeven = useAnimation()
  const controlEight= useAnimation()
  const controlNine = useAnimation()

   const transition = { duration: 1, delay: 0.2 }


  useEffect(() => {
    controlOne.start({
      x: -150, // Adjust position values as needed
      y: -350, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlOne.start({
        x: -170 , 
        y : -490,  
        scale: 0.2,
        transition: { duration: 1 } }); // Shrinking animation
    });

    controlTwo.start({
      x: 200, // Adjust position values as needed
      y: 200, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlTwo.start({
        x : 84, 
        y : -119,
        scale: 0.2, 
        transition: { duration: 1 } }); // Shrinking animation
    })

    controlThree.start({
      x: -155, // Adjust position values as needed
      y: 300, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlThree.start({
        x : -378, 
        y : -19,
        scale: 0.2, 
        transition: { duration: 1 } }); // Shrinking animation
    })

    controlFour.start({
      x: -345, // Adjust position values as needed
      y: -270, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlFour.start({
        x : -657, 
        y : -589,
        scale: 0.2, 
        transition: { duration: 1 } }); // Shrinking animation
    })

    controlFive.start({
      x: 250, // Adjust position values as needed
      y: 0, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlFive.start({
        x : -159, 
        y : -319,
        scale: 0.2, 
        transition: { duration: 1 } }); // Shrinking animation
    })

    controlSix.start({
      x: -545, // Adjust position values as needed
      y: 300, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlSix.start({
        x : -1023, 
        y :-20,
        scale: 0.2, 
        transition: { duration: 1 } }); // Shrinking animation
    })

    controlSeven.start({
      x: -570, // Adjust position values as needed
      y: -270, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlSeven.start({
        x : -1113, 
        y :-590,
        scale: 0.2, 
        transition: { duration: 1 } }); // Shrinking animation
    })

    controlSeven.start({
      x: -570, // Adjust position values as needed
      y: -270, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlSeven.start({
        x : -1114, 
        y :-590,
        scale: 0.2, 
        transition: { duration: 1 } }); // Shrinking animation
    })


    controlEight.start({
      x: 110, // Adjust position values as needed
      y: 200, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlEight.start({
        x : -524, 
        y :-120,
        scale: 0.2, 
        transition: { duration: 1 } }); // Shrinking animation
    })

    controlNine.start({
      x: 470, // Adjust position values as needed
      y: 0, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlNine.start({
        x : -240, 
        y :-300,
        scale: 0.2, 
        transition: { duration: 1 } }); // Shrinking animation
    })



    
  }, [])


  const animations = [
    { x: -150, y: -350 }, // First animation
    { x: 200, y: 200 }, // Second animation
    { x: -155, y: 300 }, // Third animation
    { x: -345, y: -270 }, // Fourth animation
    { x: 250, y: 0 }, // Fifth animation
    { x: -545, y: 300 }, // Sixth animation
    { x: -570, y: -270 }, // Seventh animation
    { x: 110, y: 200 }, // Eighth animation
    { x: 470, y: 0 }, // Ninth animation
  ];

  




 

  

   

    
    return(
      <div className="flex ml-[400px] mt-[70px]">  
        <main className = "">

          <motion.div className="absolute  font-semibold text-[250px] text-black ml-[-200px] pt-[450px]"
            initial = {{x : 0 , y : 0} }
            animate ={controlOne}
            layout =  'position'
            
            >
               s
            </motion.div>

            
            <motion.div className="absolute  font-semibold text-[250px] text-black ml-[-450px] mt-[-100px]"
            initial = {{ x : 0 , y : 0} }
            animate ={controlTwo}
            layout = "position"
            // transition={{ duration: 1 , delay: 0.2}}
            >
               p
            </motion.div>


            <motion.div className="absolute  font-semibold text-[250px] text-black ml-[50px] mt-[-200px]"
            initial = {{ x : 0 , y : 0} }
            animate ={ controlThree}
            layout = "position"
           >
               a
            </motion.div>

            <motion.div className="absolute  font-semibold text-[250px] text-black ml-[360px] mt-[370px]"
            initial = {{ x : 0 , y : 0} }
            animate ={controlFour}
            transition={{ duration: 1 , delay: 0.2}}>
               c
            </motion.div> 

            <motion.div className="absolute  font-semibold text-[250px] text-black ml-[-120px] mt-[100px] "
            // initial = {{ x : 0 , y : 0} }
            animate ={controlFive}
            >
               e
            </motion.div>

            <motion.div className="absolute  font-semibold text-[250px] text-black ml-[800px] mt-[-200px]"
            initial = {{ x : 0 , y : 0} }
            animate ={controlSix}
            >
               l
            </motion.div>

            <motion.div className="absolute  font-semibold text-[250px] text-black ml-[880px] mt-[370px]"
            initial = {{ x : 0 , y : 0} }
            animate ={controlSeven}
            >
               a
            </motion.div>

            <motion.div className="absolute  font-semibold text-[250px] text-black ml-[310px] mt-[-100px]"
            initial = {{ x : 0 , y : 0} }
            animate ={controlEight}
            >
               b
            </motion.div>


            <motion.div className="absolute  font-semibold text-[250px] text-black ml-[80px] mt-[70px] "
            initial = {{ x : 0 , y : 0} }
            animate ={controlNine}
            >
               _
            </motion.div>
        </main>

      </div>

          )


}



      //     <motion.div className="absolute  font-semibold text-[250px] text-black ml-[-200px] pt-[450px]"
      //       initial = {{x : 0 , y : 0} }
      //       animate ={ {x: -150 , y: -350}}
      //       transition={{ duration: 1 , delay: 0.2}}
      //       onAnimationComplete={() => {
      //       animeControls.start({ scale: 0.5, transition: { duration: 1 } });
      // }}
      //       layout =  'position'
            
      //       >
      //          s
      //       </motion.div>




      //  <motion.div className="absolute  font-semibold text-[250px] text-black ml-[-450px] mt-[-100px]"
      //       initial = {{ x : 0 , y : 0} }
      //       animate ={ {x: 200 , y: 200}}
      //       transition={{ duration: 1 , delay: 0.2}}>
      //          p
      //       </motion.div>


      //       <motion.div className="absolute  font-semibold text-[250px] text-black ml-[50px] mt-[-200px]"
      //       initial = {{ x : 0 , y : 0} }
      //       animate ={ {x: -155 , y: 300}}
      //       transition={{ duration: 1 , delay: 0.2}}>
      //          a
      //       </motion.div>

      //       <motion.div className="absolute  font-semibold text-[250px] text-black ml-[360px] mt-[370px]"
      //       initial = {{ x : 0 , y : 0} }
      //       animate ={ {x: -345, y: -270}}
      //       transition={{ duration: 1 , delay: 0.2}}>
      //          c
      //       </motion.div> 

      //       <motion.div className="absolute  font-semibold text-[250px] text-black ml-[-120px] mt-[100px] "
      //       // initial = {{ x : 0 , y : 0} }
      //       animate ={ {x: 250 , y: 0}}
      //       transition={{ duration: 1 , delay: 0.2}}>
      //          e
      //       </motion.div>

      //       <motion.div className="absolute  font-semibold text-[250px] text-black ml-[800px] mt-[-200px]"
      //       initial = {{ x : 0 , y : 0} }
      //       animate ={ {x: -545, y: 300}}
      //       transition={{ duration: 1 , delay: 0.2}}>
      //          l
      //       </motion.div>

      //       <motion.div className="absolute  font-semibold text-[250px] text-black ml-[880px] mt-[370px]"
      //       // initial = {{ x : 0 , y : 0} }
      //       animate ={ {x: -570 , y: -270}}
      //       transition={{ duration: 1 , delay: 0.2}}>
      //          a
      //       </motion.div>

      //       <motion.div className="absolute  font-semibold text-[250px] text-black ml-[310px] mt-[-100px]"
      //       // initial = {{ x : 0 , y : 0} }
      //       animate ={ {x: 110 , y: 200}}
      //       transition={{ duration: 1 , delay: 0.2}}>
      //          b
      //       </motion.div>


      //       <motion.div className="absolute  font-semibold text-[250px] text-black ml-[80px] mt-[70px] "
      //       // initial = {{ x : 0 , y : 0} }
      //       animate ={ {x: 470 , y: 0}}
      //       transition={{ duration: 1 , delay: 0.2}}>
      //          _
      //       </motion.div>