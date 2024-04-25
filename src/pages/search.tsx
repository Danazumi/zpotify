import { useState, useEffect } from "react";
import {motion, useAnimate , useAnimation, useAnimationControls} from "framer-motion"

 



export default function Search(){

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
      x: -140, // Adjust position values as needed
      y: -350, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlOne.start({
        x: -170 , 
        y : -490,  
        scale: 0.18,
        transition: { duration: 0.8 } }); // Shrinking animation
    });

    controlTwo.start({
      x: 200, // Adjust position values as needed
      y: 200, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlTwo.start({
        x : 81, 
        y : -124,
        scale: 0.18, 
        transition: { duration: 0.8 } }); // Shrinking animation
    })

    controlThree.start({
      x: -155, // Adjust position values as needed
      y: 300, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlThree.start({
        x : -384, 
        y : -24,
        scale: 0.18, 
        transition: { duration: 0.8 } }); // Shrinking animation
    })

    controlFour.start({
      x: -345, // Adjust position values as needed
      y: -260, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlFour.start({
        x : -665, 
        y : -593,
        scale: 0.18, 
        transition: { duration: 0.8 } }); // Shrinking animation
    })

    controlFive.start({
      x: 250, // Adjust position values as needed
      y: 0, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlFive.start({
        x : -170, 
        y : -323,
        scale: 0.18, 
        transition: { duration: 0.8 } }); // Shrinking animation
    })

    controlSix.start({
      x: -545, // Adjust position values as needed
      y: 300, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlSix.start({
        x : -1037, 
        y :-23,
        scale: 0.18, 
        transition: { duration: 0.8 } }); // Shrinking animation
    })


    controlSeven.start({
      x: -570, // Adjust position values as needed
      y: -270, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlSeven.start({
        x : -1131, 
        y :-593,
        scale: 0.18, 
        transition: { duration: 0.8 } }); // Shrinking animation
    })


    controlEight.start({
      x: 110, // Adjust position values as needed
      y: 200, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlEight.start({
        x : -545, 
        y :-124,
        scale: 0.18, 
        transition: { duration: 0.8 } }); // Shrinking animation
    })

    controlNine.start({
      x: 470, // Adjust position values as needed
      y: 0, // Adjust position values as needed
      transition: { duration: 1, delay: 0.2 }, // Position animation
    }).then(() => {
      return new Promise((resolve) => setTimeout(resolve, 1000)); // 1 second delay
    }).then(() => {
      controlNine.start({
        x : -268, 
        y :-300,
        scale: 0.18, 
        transition: { duration: 0.8 } }); // Shrinking animation
    })



    
  }, [])


  
  




 

  

   

    
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